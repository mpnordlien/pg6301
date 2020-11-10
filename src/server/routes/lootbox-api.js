/* File from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/src/server/routes/match-api.js */

const express = require('express');
const {getRandomPokemon, getAllPokemon, getPokemon, deletePokemon, updatePokemon} = require('../db/pokemons');
const router = express.Router();



router.get('/randompokemon/:qty', (req, res) => {

    const payload = getRandomPokemon(req.params["qty"]);

    res.status(201).json(payload);
});


router.post('/pokemons', (req, res) => {

    const payload = getAllPokemon();

    res.status(201).json(payload);
});

// Find pokemon by chosen id
router.get('/pokemons/:id', (req, res) => {

    const pokemon = getPokemon(req.params["id"]);

    if (pokemon === undefined || pokemon === null) {
        // Pokemon not found
        res.status(404);
        res.send()
    } else {
        res.json(pokemon);
    }
});

// Delete pokemon by chose id
router.delete('/pokemons/:id', (req, res) => {

    const deleted = deletePokemon(req.params["id"]);
    // Returns true if chosen pokemon is deleted
    if (deleted) {
        // Good delete
        res.status(204);
    } else {
        // Pokemon is either deleted or doesn't exist
        res.status(404);
    }
    res.send();
});

// Change pokemon in DB, temporary proof of concept 
// (updatePokemon function needs more input, dummy data in pokemons.js).
router.put('/pokemons/:id', (req, res) => {

    const pokemon = updatePokemon(req.params["id"]);

    if (pokemon === undefined || pokemon === null) {
        res.status(404);
        res.send()
    } else {
        // Send updated pokemon as JSON object.
        res.json(pokemon);
    }
});



module.exports = router;