import "./App.css";
import { useState, useEffect } from "react";
import * as Function from "./functions";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Section1 from "./Components/Section1/Section1";

function App() {
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
      <Main></Main>
      <Section1></Section1>
      <Footer />
    </>
  );
}

export default App;
