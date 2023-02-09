import "./App.css";
import { useState, useEffect } from "react";
import * as Function from "./functions";
import Login from "./Components/Login";
import Main from "./Components/Main";

function App() {
  const [isUser, setIsUser] = useState(false);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  useEffect(() => {
    if (urlParams.get("data")) {
      const data = Function.parseJwt(urlParams.get("data"));
      localStorage.setItem("user_data", JSON.stringify(data.user));
      console.log(data);
      setIsUser(true);
      window.location.replace("http://localhost:3000/");
    }
    if (localStorage.getItem("user_data")) {
      setIsUser(true);
    }
  });

  return (
    <div className="App center_items">
      {isUser === false && <Login></Login>}
      {isUser === true && <Main></Main>}
    </div>
  );
}

export default App;
