//packages
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const passportSteam = require("passport-steam");
const SteamStrategy = passportSteam.Strategy;
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Gamedig = require("gamedig");
const port = 3001;

app.use(cors());
dotenv.config();
app.use(express.json());

//savienojas ar datubāzi
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "sql7.freemysqlhosting.net",
  user: "sql7597281",
  password: "QtnDu22e2b",
  database: "sql7597281",
});
connection.connect();

//uzstāda passport, lai autentificētu lietotāju caur steam
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
passport.use(
  new SteamStrategy(
    {
      returnURL: "http://localhost:3001/api/auth/steam/return",
      realm: "http://localhost:3001/",
      apiKey: "F293588E3D0C16E3CF253D7CBD1BD0BC",
    },
    function (identifier, profile, done) {
      process.nextTick(function () {
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )
);
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 3600000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//tokenizē lietotāju datus un tad to pārsūta
app.get("/", (req, res) => {
  const token = jwt.sign(
    { user: req.user, secret: process.env.DATA_SECRET },
    "jtprakse2023"
  );
  res.redirect(`http://localhost:3000/?data=${token}`);
  //ievieto lietotāja steam id datubāzē
  connection.query(
    `INSERT INTO steam_main (steamid) VALUES ("${req.user.id}") ON DUPLICATE KEY UPDATE steamid="${req.user.id}";`,
    (error, result) => {
      console.error(error);
      // return res.status(500).send({ error: "Internal Server Error" });
    }
  );
});

app.get(
  "/api/auth/steam",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.get(
  "/api/auth/steam/return",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.get("/:game/:ip", async (req, res) => {
  const { game, ip } = req.params;
  const [host, port] = ip.split(":");

  const serverData = await Gamedig.query({
    type: game,
    host,
    port,
  });

  res.send({ game, ip, data: serverData });
});

app.listen(port, () => {
  console.log("Listening, port " + port);
});
