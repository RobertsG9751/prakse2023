import "./App.css";
import { useState, useEffect } from "react";
import * as Function from "./functions";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Servers from "./Components/Servers";

function App() {
  const [active, setActive] = useState("Servers");
  const [isUser, setIsUser] = useState(false);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  useEffect(() => {
    if (urlParams.get("data")) {
      const data = Function.parseJwt(urlParams.get("data"));

      if (data.secret === process.env.REACT_APP_SECRET) {
        localStorage.setItem("user_data", JSON.stringify(data.user));
        setIsUser(true);
      }
      window.location.replace("http://localhost:3000/");
    }
    if (localStorage.getItem("user_data")) {
      setIsUser(true);
    }
  }, []);

  return (
    <>
      <Header isLogged={isUser} />
      {active === "Main" && <Main></Main>}
      {active === "Servers" && <Servers></Servers>}
      <Footer />
    </>
  );
}

export default App;
