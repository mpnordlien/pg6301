/* File from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/tests/server/db/quizzes-test.js */

const {getRandomPokemon} = require("../../../src/server/db/pokemons");


test("Test invalid n", () =>{

    expect(() => getRandomPokemon(-1)).toThrow();
    expect(() => getRandomPokemon(0)).toThrow();
    expect(() => getRandomPokemon(100000000)).toThrow();
});


test("Test get 1", () => {

    const pokemons = getRandomPokemon(1);

    expect(pokemons.length).toBe(1);
});

test("Test get 5", () => {

    for(let i=0; i<100; i++) {
        const pokemons = getRandomPokemon(5);

        expect(pokemons.length).toBe(5);
        expect(pokemons[0].name).not.toBe(pokemons[1].name);
    }
});

