import style from "./Login.module.css";
import React from "react";

const Login = () => {
  return (
    <div className={`center_items ${style.wrapper}`}>
      <h2 className={style.heading}>Sign in with your steam account!</h2>
      <a href="http://localhost:3001/api/auth/steam">
        <img
          className={style.image}
          alt="#"
          src="https://cdn.discordapp.com/attachments/707559271793164292/1073637512880336918/steamlogin.png"
        ></img>
      </a>
    </div>
  );
};
export default Login;
