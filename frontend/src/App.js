import "./App.css";
import { useState, useEffect } from "react";
import * as Function from "./functions";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
      {/* <article className="test">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mauris
        orci. Pellentesque nulla odio, dapibus id sollicitudin pellentesque,
        suscipit vitae tortor. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. In id mauris orci. Pellentesque nulla odio, dapibus id
        sollicitudin pellentesque, suscipit vitae tortor.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. In id mauris orci. Pellentesque nulla
        odio, dapibus id sollicitudin pellentesque, suscipit vitae tortor.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. In id mauris orci.
        Pellentesque nulla odio, dapibus id sollicitudin pellentesque, suscipit
        vitae tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
        id mauris orci. Pellentesque nulla odio, dapibus id sollicitudin
        pellentesque, suscipit vitae tortor.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In id mauris orci. Pellentesque nulla odio,
        dapibus id sollicitudin pellentesque, suscipit vitae tortor.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. In id mauris orci.
        Pellentesque nulla odio, dapibus id sollicitudin pellentesque, suscipit
        vitae tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
        id mauris orci. Pellentesque nulla odio, dapibus id sollicitudin
        pellentesque, suscipit vitae tortor.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In id mauris orci. Pellentesque nulla odio,
        dapibus id sollicitudin pellentesque, suscipit vitae tortor.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. In id mauris orci.
        Pellentesque nulla odio, dapibus id sollicitudin pellentesque, suscipit
        vitae tortor.ipit vitae tortor.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. In id mauris orci. Pellentesque nulla odio, dapibus id
        sollicitudin pellentesque, suscipit vitae tortor.ipit vitae tortor.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. In id mauris orci.
        Pellentesque nulla odio, dapibus id sollicitudin pellentesque, suscipit
        vitae tortor.ipit vitae tortor.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. In id mauris orci. Pellentesque nulla odio, dapibus id
        sollicitudin pellentesque, suscipit vitae tortor.ipit vitae tortor.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. In id mauris orci.
        Pellentesque nulla odio, dapibus id sollicitudin pellentesque, suscipit
        vitae tortor.ipit vitae tortor.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. In id mauris orci. Pellentesque nulla odio, dapibus id
        sollicitudin pellentesque, suscipit vitae tortor. nigga
      </article> */}
      <Footer />
    </>
  );
}

export default App;
