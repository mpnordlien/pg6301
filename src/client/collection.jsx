/* Inspired by lootbox.jsx and pokemonlist.jsx */

import React from "react";

export class Collection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        collection: {
            pokemons: [],
            numberOfPokemons: 0,
            numberOfLootboxes: 3
            },
        error: null
        };
    }

    componentDidMount() {
        this.lootBoxBtn();
    }

    lootBoxBtn(){
        if(this.state.collection.numberOfLootboxes > 0){
            return (
                <React.Fragment>
                    <button className="button" onClick={this.openLootBox} id="openBtn">
                        Open a lootbox
                    </button>
                </React.Fragment>
            );
        }    
    };
    
    openLootBox = async () => {
        
        const url = "/api/randompokemon/1";
        let response;
        let newPokemon;
        
        const collection = this.state.collection;
        const pokemons = collection.pokemons;
        let pokemonsNew = [];
        let numberOfLootboxes = collection.numberOfLootboxes;
        let count = collection.numberOfPokemons;

        //add random pokemon to collection
        if (numberOfLootboxes > 0) {
            try {
                response = await fetch(url, { method: "get" });
                newPokemon = await response.json();
            } catch (err) {
                return null;
            }

            if (response.status !== 201) {
                return null;
            }
            
            pokemonsNew = newPokemon;
            
            
            
            this.setState({
                collection: {
                    pokemons: [...pokemons, ...pokemonsNew],
                    numberOfLootboxes: numberOfLootboxes - 1,
                    numberOfPokemons: pokemonsNew.length
                },
                error: null
            });
            
        } else {
            // DISABLE LOOTBOX
        }
    };

    getPokemonFromLootbox(i, pokemon) {
        if(i === 1){
            return (
                <React.Fragment>
                    <div id={"pokemon_" + pokemon[i-1].id} className="pokemon">
                        <p className="pokemonFields">
                            # 00{pokemon[i-1].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                            Name: {pokemon[i-1].name}{" "}
                        </p>
                        <p className="pokemonFields">
                            Element: {pokemon[i-1].ele}{" "}
                        </p>
                    </div>
                </React.Fragment>
            );
        }else if(i === 2){
            return (
                <React.Fragment>
                    <div id={"pokemon_" + pokemon[i-1].id} className="pokemon">
                        <p className="pokemonFields">
                            # 00{pokemon[i-1].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                            Name: {pokemon[i-1].name}{" "}
                        </p>
                        <p className="pokemonFields">
                            Element: {pokemon[i-1].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[i-2].id} className="pokemon">
                        <p className="pokemonFields">
                            # 00{pokemon[i-2].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                            Name: {pokemon[i-2].name}{" "}
                        </p>
                        <p className="pokemonFields">
                            Element: {pokemon[i-2].ele}{" "}
                        </p>
                    </div>
                </React.Fragment>
            );
        }else if(i === 3){
            return (
                <React.Fragment>
                    <div id={"pokemon_" + pokemon[i-1].id} className="pokemon">
                        <p className="pokemonFields">
                            # 00{pokemon[i-1].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                            Name: {pokemon[i-1].name}{" "}
                        </p>
                        <p className="pokemonFields">
                            Element: {pokemon[i-1].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[i-2].id} className="pokemon">
                        <p className="pokemonFields">
                            # 00{pokemon[i-2].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                            Name: {pokemon[i-2].name}{" "}
                        </p>
                        <p className="pokemonFields">
                            Element: {pokemon[i-2].ele}{" "}
                        </p>
                    </div>
                    <div id={"pokemon_" + pokemon[i-3].id} className="pokemon">
                        <p className="pokemonFields">
                            # 00{pokemon[i-3].pdId}{" "}
                        </p>
                        <p className="pokemonFields">
                            Name: {pokemon[i-3].name}{" "}
                        </p>
                        <p className="pokemonFields">
                            Element: {pokemon[i-3].ele}{" "}
                        </p>
                    </div>
                </React.Fragment>
            );
        
        }
        
    }

    getDummyCollection = async numberOfPokemons => {
        if (numberOfPokemons < 1) {
            throw "Invalid number of requested pokemons: " + n;
        }

        const url = "/api/randompokemon";
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

        if (!this.state.collection) {
            return <h2>Loading...</h2>;
        }


        const collection = this.state.collection;
        const pokemon = collection.pokemons;
        const numberOfLootboxes = collection.numberOfLootboxes;
        
        let lbBtn;
        if(numberOfLootboxes > 0){
            lbBtn = this.lootBoxBtn();
        } else {
            lbBtn = <p>You have no more loot boxes</p>
            console.log(pokemon)
        }

        let content;
        if(pokemon.length > 0){
            content = this.getPokemonFromLootbox(pokemon.length, pokemon);
        }
        

        return (
            <div>
                <p className={"welcome-text"}>COLLECTION</p>
                <div className="pokeContainer">
                    {content}
                    {lbBtn}
                </div>
            </div>
        );
    }
}
