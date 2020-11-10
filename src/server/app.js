/* File from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/src/server/app.js 
 AND https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/server/app.js 
 AND https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-08/src/server/app.js */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const listBoxApi = require('./routes/lootbox-api');
const authApi = require('./routes/auth-api');
const Users = require('./db/users');

const app = express();

//to handle JSON payloads
app.use(bodyParser.json());

app.use(session({
    secret: 'a secret used to encrypt the session cookies',
    resave: false,
    saveUninitialized: false
}));

app.use(express.static('public'));

passport.use(new LocalStrategy(
    {
        usernameField: 'userId',
        passwordField: 'password'
    },
    function (userId, password, done) {

        const ok = Users.verifyUser(userId, password);

        if (!ok) {
            return done(null, false, {message: 'Invalid username/password'});
        }

        const user = Users.getUser(userId);
        return done(null, user);
    }
));


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {

    const user = Users.getUser(id);

    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
});

app.use(passport.initialize());
app.use(passport.session());

//--- Routes -----------
app.use('/api', authApi);
app.use('/api', listBoxApi);



app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});


module.exports = {app};