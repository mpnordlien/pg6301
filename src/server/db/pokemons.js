/* File from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/src/server/db/quizzes.js 
AND https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/server/repository.js*/

const pokemons = [
    {
        id : 0, name : "Bulbasaur", pdId : 1, ele : "Grass & Poison"
    },
    {
        id : 1, name : "Ivysaur", pdId : 2, ele : "Grass & Poison"
    },
    {
        id : 2, name : "Venusaur", pdId : 3, ele : "Grass & Poison"
    },
    {
        id : 3, name : "Charmander", pdId : 4, ele : "Fire"
    },
    {
        id : 4, name : "Charmeleon", pdId : 5, ele : "Fire"
    },
    {
        id : 5, name : "Charizard", pdId : 6, ele : "Fire & Flying"
    },
    {
        id : 6, name : "Squirtle", pdId : 7, ele : "Water"
    },
    {
        id : 7, name : "Wartortle", pdId : 8, ele : "Water"
    },
    {
        id : 8, name : "Blastoise", pdId : 9, ele : "Water"
    }
];

function getAllPokemon(){
    return Array.from(pokemons.values());
}

function deletePokemon(id){
    const _id = getPokemon(id);
    if(_id){
        pokemons.splice(pokemons.findIndex(e => e.id == _id.id), 1);
        return true
    } else {
        return false
    }
}

function getPokemon(id){
    const _pokemon = pokemons.find(e => e.id == id);
    return _pokemon
}

function updatePokemon(id){

    const _pokemon = pokemons.find(e => e.id == id);
    _pokemon.name = "Pikachu";
    _pokemon.pdId = 25;
    _pokemon.ele = "Electric";
    
    return _pokemon;
}

function getRandomPokemon(numberOfPokemons){

    if(numberOfPokemons < 1){
        throw "Invalid number of requested pokemons: " + n;
    }

    if(numberOfPokemons > pokemons.length){
        throw "Too many pokemons";
    }

    const selection = Array(numberOfPokemons);

    let i = 0;
    while (i < numberOfPokemons) {

        const k = Math.floor(pokemons.length * Math.random());
        if (selection.includes(k)) {
            continue;
        }

        selection[i] = k;
        i++;
    }

    return Array.from(selection).map(e => pokemons[e]);
}

module.exports = {getAllPokemon, getRandomPokemon, getPokemon, deletePokemon, updatePokemon};
