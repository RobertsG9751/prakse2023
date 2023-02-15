import React from "react";
import style from "./Main.module.css";

const Main = () => {
  const user_data = JSON.parse(localStorage.getItem("user_data"));

  return (
    <main className={style.main}>
      <div className={style.banner}>
        <img
          className={style.img}
          src="https://cdn.discordapp.com/attachments/707559271793164292/1075556978719457301/counter-strike-global-offensive-4k-new-af-2560x1440_1.jpg"
        ></img>
        <h1 className={style.h1}>TIME TO MAKE SOME BREAD</h1>
      </div>
    </main>
  );
};
export default Main;
