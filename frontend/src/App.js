import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [isUser, setIsUser] = useState(false)
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log(localStorage.getItem("user_id"))
  useEffect(()=>{
    if(urlParams.get('steamid')){
      localStorage.setItem("user_id", urlParams.get('steamid'))
      localStorage.setItem("user_name", urlParams.get('username'))
      localStorage.setItem("user_avatar", urlParams.get('avatar'))
      setIsUser(true)
      window.location.replace('http://localhost:3000/')
    }
  }, [])
  useEffect(()=>{
    if(localStorage.getItem("user_id"))
    setIsUser(true)
  }, [])

  const logout = () => {
    localStorage.removeItem("user_id")
    localStorage.removeItem("user_name")
    localStorage.removeItem("user_avatar")
    console.log("logged out")
  }

  ///// TEST UZMETUMS
  ///// Parāda lietotājam steam_id, username un avatar pēc steam login
  return (
    <div className="App">
      {
        isUser===false &&(
          <a href="http://localhost:3001/api/auth/steam">Sign in</a>
        )
      }{
        isUser===true &&(
          <>
            <p>Steam_id: {localStorage.getItem("user_id")}</p>
            <p>Username: {localStorage.getItem("user_name")}</p>
            <img class="avatar" src={localStorage.getItem("user_avatar")}></img>
            <br></br>
            <a onClick={logout} href='http://localhost:3000/'>Logout</a>
          </>
        )
      }
    </div>
  );
}

export default App;
