const express = require('express');
const passport = require('passport');
const session = require('express-session');
const passportSteam = require('passport-steam');
const SteamStrategy = passportSteam.Strategy;
const app = express();
const port = 3001;

passport.serializeUser((user, done) => {
    done(null, user);
   });
   passport.deserializeUser((user, done) => {
    done(null, user);
   });
   passport.use(new SteamStrategy({
    returnURL: 'http://localhost:' + port + '/api/auth/steam/return',
    realm: 'http://localhost:' + port + '/',
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
   }
))
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send(req.user);
});

app.get('/api/auth/steam', passport.authenticate('steam', {failureRedirect: '/'}), function (req, res) {
    res.redirect('/')
});

app.get('/api/auth/steam/return', passport.authenticate('steam', {failureRedirect: '/'}), function (req, res) {
    res.redirect('/')
});

app.listen(port, () => {
    console.log('Listening, port ' + port);
});