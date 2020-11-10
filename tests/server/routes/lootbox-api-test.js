/* File from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/tests/server/routes/match-api-test.js */

const request = require('supertest');
const {app} = require('../../../src/server/app');

test("Test create lootbox", async () =>{

    const response = await request(app).get('/api/randompokemon/1');

    expect(response.statusCode).toBe(201);
    expect(response.body.length).toBe(1);
});


test("find pokemon by id", async () =>{

    let responseAll = await request(app).post('/api/pokemons');
    expect(responseAll.statusCode).toBe(201);

    const pokemons = responseAll.body;
    expect(pokemons.length).toBe(9);

    let response = await request(app).get('/api/pokemons/1');
    const pokemon = response.body;
    
    expect(pokemon.name).toBe("Ivysaur");
    expect(pokemon.id).toBe(1);
});

test("Change pokemon to Pikachu", async () =>{
    let responseAll = await request(app).post('/api/pokemons');
    expect(responseAll.statusCode).toBe(201);

    const pokemons = responseAll.body;
    expect(pokemons.length).toBe(9);

    let response = await request(app).put('/api/pokemons/1');
    const pokemon = response.body;

    expect(pokemon.id).toBe(1)
    expect(pokemon.name).toBe("Pikachu");
    expect(pokemon.ele).toBe("Electric");
    expect(pokemon.pdId).toBe(25)
});

test("Delete all pokemons", async () =>{

    let responseAll = await request(app).post('/api/pokemons');
    expect(responseAll.statusCode).toBe(201);

    const pokemons = responseAll.body;
    expect(pokemons.length).toBe(9);

    for(let i=0; i<pokemons.length; i++){
        const res = await request(app).delete('/api/pokemons/'+i);
        expect(res.statusCode).toBe(204);
    }

    responseAll = await request(app).post('/api/pokemons');
    expect(responseAll.statusCode).toBe(201);
    expect(responseAll.body.length).toBe(0);
});

