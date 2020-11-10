/* File from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/src/client/match.jsx */

import React from "react";

export class Pokemonlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        pokemonList: null,
        error: null
        };
    }

    componentDidMount() {
        this.listPokemon();
    }

    listPokemon = async () => {
        const pokemons = await this.getAllPokemon();

        this.setState(
        !pokemons
            ? { error: "Error when connecting to server" }
            : {
                error: null,
                pokemonList: {
                pokemons: pokemons,
                currentIndex: 0,
                numberOfPokemons: pokemons.length
                }
            }
        );
    };

    getAllPokemon = async () => {

        const url = "/api/pokemons";
        let response;
        let payload;

        try {
            response = await fetch(url, { method: "post" });
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

        if (!this.state.pokemonList) {
            return <h2>Loading...</h2>;
        }

        const pokemonList = this.state.pokemonList;
        
        const pokemon = pokemonList.pokemons;

        return (
            <div>
                <p className={"welcome-text"}>ALL POKEMONS</p>
                <div className="pokeContainer">
                    <div id={"pokemon_" + pokemon[0].id} className="pokemon">
                        <p className="pokemonFields">
                        # 00{pokemon[0].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                        Name: {pokemon[0].name}{" "}
                        </p>
                        <p className="pokemonFields">
                        Element: {pokemon[0].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[1].id} className="pokemon">
                        <p className="pokemonFields">
                        # 00{pokemon[1].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                        Name: {pokemon[1].name}{" "}
                        </p>
                        <p className="pokemonFields">
                        Element: {pokemon[1].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[2].id} className="pokemon">
                        <p className="pokemonFields">
                        # 00{pokemon[2].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                        Name: {pokemon[2].name}{" "}
                        </p>
                        <p className="pokemonFields">
                        Element: {pokemon[2].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[3].id} className="pokemon">
                        <p className="pokemonFields">
                        # 00{pokemon[3].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                        Name: {pokemon[3].name}{" "}
                        </p>
                        <p className="pokemonFields">
                        Element: {pokemon[3].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[4].id} className="pokemon">
                        <p className="pokemonFields">
                        # 00{pokemon[4].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                        Name: {pokemon[4].name}{" "}
                        </p>
                        <p className="pokemonFields">
                        Element: {pokemon[4].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[5].id} className="pokemon">
                        <p className="pokemonFields">
                        # 00{pokemon[5].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                        Name: {pokemon[5].name}{" "}
                        </p>
                        <p className="pokemonFields">
                        Element: {pokemon[5].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[6].id} className="pokemon">
                        <p className="pokemonFields">
                        # 00{pokemon[6].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                        Name: {pokemon[6].name}{" "}
                        </p>
                        <p className="pokemonFields">
                        Element: {pokemon[6].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[7].id} className="pokemon">
                        <p className="pokemonFields">
                        # 00{pokemon[7].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                        Name: {pokemon[7].name}{" "}
                        </p>
                        <p className="pokemonFields">
                        Element: {pokemon[7].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[8].id} className="pokemon">
                        <p className="pokemonFields">
                        # 00{pokemon[8].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                        Name: {pokemon[8].name}{" "}
                        </p>
                        <p className="pokemonFields">
                        Element: {pokemon[8].ele}{" "}
                        </p>
                    </div>
                </div>
            </div>
        );
        
            
    }
}
