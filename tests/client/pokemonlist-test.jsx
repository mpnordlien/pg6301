const React = require('react');
const {mount} = require('enzyme');
const {Pokemonlist} = require("../../src/client/pokemonlist");
const {pokemons} = require("../../src/server/db/pokemons");
const {overrideFetch, asyncCheckCondition} = require('../mytest-utils');
const {app} = require('../../src/server/app');



function isPokemonDisplayed(driver) {

    const pokemon = driver.find('.pokemon');
    const pokemonField = driver.find('.pokemonFields');

    return pokemon.length === 9 && pokemonField.length === 27;
}

function getDisplayedPokemon(driver) {

    const pokemonDiv = driver.find('.pokemon').at(0);
    const html_id = pokemonDiv.prop('id');
    const id = parseInt(html_id.substring("pokemon_".length, html_id.length));

    const pokemon = pokemons.find(e => e.id === id);
    return pokemon;
}

async function waitForPokemonDisplayed(driver){

    const displayed = await asyncCheckCondition(()=>{
        driver.update();
        return isPokemonDisplayed(driver);
    }, 2000 ,200);

    return displayed;
}

test("Test rendered pokemon", async () => {

    overrideFetch(app);

    const driver = mount(<Pokemonlist/>);

    const displayed = await waitForPokemonDisplayed(driver);

    expect(displayed).toEqual(true);
});