import "./App.css";
import { useState, useEffect } from "react";
import * as Function from "./functions";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Servers from "./Components/Servers_page/Servers";

function App() {
  const [active, setPage] = useState("Home");
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
  const handlePage = function (page) {
    window.scrollTo(0, 0);
    setPage(page);
  };
  return (
    <>
      <Header isLogged={isUser} handlePage={handlePage} />
      {active === "Home" && <Main handlePage={handlePage}></Main>}
      {active === "Servers" && <div className="center-div"><Servers></Servers></div>
      }
      <Footer />
    </>
  );
}

export default App;
