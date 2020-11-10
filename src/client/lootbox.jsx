/* File from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/src/client/match.jsx */

import React from "react";

export class Lootbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        pokemon: null,
        error: null
        };
    }

    componentDidMount() {
        this.startNewMatch();
    }

    startNewMatch = async () => {
        const pokemons = await this.getRandomPokemon(1);

        this.setState(
        !pokemons
            ? { error: "Error when connecting to server" }
            : {
                error: null,
                pokemon: {
                pokemons: pokemons,
                currentIndex: 0,
                numberOfPokemons: pokemons.length
                }
            }
        );
    };

    getRandomPokemon = async numberOfPokemons => {
        if (numberOfPokemons < 1) {
            throw "Invalid number of requested pokemons: " + n;
        }

        const url = "/api/randompokemon/1";
        let response;
        let payload;

        try {
            response = await fetch(url, { method: "get" });
            payload = await response.json();
        } catch (err) {
            return null;
        }

        if (response.status !== 201) {
            return null;
        }

        return payload;
    };


    render() {
        if (this.state.error) {
            return <h2>{this.state.error}</h2>;
        }

        if (!this.state.pokemon) {
            return <h2>Loading...</h2>;
        }

        const p = this.state.pokemon;
        const pokemon = p.pokemons[p.currentIndex];

        return (
            <div>
                <p className={"welcome-text"}>LOOTBOX</p>
                <div className="pokeContainer">
                    <div id={"pokemon_" + pokemon.id} className="pokemon">
                        <p className="pokemonFields">
                        # 00{pokemon.pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                        Name: {pokemon.name}{" "}
                        </p>
                        <p className="pokemonFields">
                        Element: {pokemon.ele}{" "}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
