const express = require('express');
const passport = require('passport');
const session = require('express-session');
const passportSteam = require('passport-steam');
const SteamStrategy = passportSteam.Strategy;
const cors = require("cors")
const app = express(); 
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
const port = 3001;

app.use(cors())
dotenv.config()
app.use(express.json());

passport.serializeUser((user, done) => {
    done(null, user);
   });
   passport.deserializeUser((user, done) => {
    done(null, user);
   });
   passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3001/api/auth/steam/return',
    realm: 'http://localhost:3001/',
    apiKey: 'F293588E3D0C16E3CF253D7CBD1BD0BC'
    }, function (identifier, profile, done) {
     process.nextTick(function () {
      profile.identifier = identifier;
      return done(null, profile);
     });
    }
));
   app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false,
    cookie: {
     maxAge: 3600000
    }
}))
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    const token = jwt.sign({ user: req.user, secret: process.env.DATA_SECRET }, 'jtprakse2023');
    console.log(token)
    res.redirect(`http://localhost:3000/?data=${token}`)
    //res.redirect(`http://localhost:3000/?steamid=${req.user.id}&username=${req.user.displayName}&avatar=${req.user._json.avatar}`)
});

app.get('/api/auth/steam', passport.authenticate('steam', {failureRedirect: '/'}), function (req, res) {
    res.redirect("/")
});

app.get('/api/auth/steam/return', passport.authenticate('steam', {failureRedirect: '/'}), function (req, res) {
    res.redirect("/")
});

app.listen(port, () => {
    console.log('Listening, port ' + port);
});