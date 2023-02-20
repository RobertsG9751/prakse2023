import React from "react";
import style from "./Main.module.css";

const Main = () => {
  const user_data = JSON.parse(localStorage.getItem("user_data"));

  return (
    <main className={style.main}>
      <div className={style.banner}>
        <img
          className={style.banner_img}
          src="http://localhost:3000/images/counter-strike-global-offensive-banner.jpg"
        ></img>
        <h1 className={style.banner_text}>TIME TO MAKE SOME BREAD</h1>
      </div>
      <div className={style.crypto_sec}>
        <img
          className={style.crypto_img}
          src="http://localhost:3000/images/coin.jpg"
        ></img>
        <div className={style.crypto_wrapper}>
          <h1 className={style.crypto_text}>
            Get paid securely in cryptocurrency
          </h1>
          <a
            href="http://localhost:3001/api/auth/steam"
            className={style.crypto_btn}
          >
            <span>Read more</span>
          </a>
        </div>
      </div>
    </main>
  );
};
export default Main;
