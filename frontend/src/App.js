<<<<<<< HEAD
import "./App.css";
import { useState, useEffect } from "react";
=======
import './App.css';
import { useState, useEffect } from 'react';
import * as Function from "./functions"
import Login from "./Components/Login"
import Main from "./Components/Main"
>>>>>>> 373e8783c7ccc6812150a1b1a8eb40a986174585

function App() {
  const [isUser, setIsUser] = useState(false);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
<<<<<<< HEAD
  console.log(localStorage.getItem("user_id"));
  useEffect(() => {
    if (urlParams.get("steamid")) {
      localStorage.setItem("user_id", urlParams.get("steamid"));
      localStorage.setItem("user_name", urlParams.get("username"));
      localStorage.setItem("user_avatar", urlParams.get("avatar"));
      setIsUser(true);
      window.location.replace("http://localhost:3000/");
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("user_id")) setIsUser(true);
  }, []);

  const logout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_avatar");
    console.log("logged out");
  };

  ///// TEST UZMETUMS
  ///// Parāda lietotājam steam_id, username un avatar pēc steam login
  return (
    <div className="App">
      <body class="background">
        {isUser === false && (
          <a href="http://localhost:3001/api/auth/steam">
            <button class="log_button">
              <span class="text">Log in</span>
            </button>
          </a>
        )}
        {isUser === true && (
          <>
            <div class="background"></div>
            <div class="static_username">
              {localStorage.getItem("user_name")}
            </div>
            <a href="?">
              <img
                class="static_avatar"
                src={localStorage.getItem("user_avatar")}
              ></img>
            </a>
            <br></br>
            <a onClick={logout} href="http://localhost:3000/">
              <button class="log_button">
                <span class="text">Log out</span>
              </button>
            </a>
          </>
        )}
      </body>
=======


  useEffect(()=>{
    if(urlParams.get("data")){
      const data = Function.parseJwt(urlParams.get("data"))
      localStorage.setItem("user_data", JSON.stringify(data.user))
      console.log(data)
      setIsUser(true)
      window.location.replace('http://localhost:3000/')
    }
    if(localStorage.getItem("user_data")){
      setIsUser(true)
    }
  })

  return (
    <div className="App center_items">
      {
        isUser===false&&(
          <Login></Login>
        )
      }
      {
        isUser===true&&(
          <Main></Main>
        )
      }
>>>>>>> 373e8783c7ccc6812150a1b1a8eb40a986174585
    </div>
  );
}

export default App;
