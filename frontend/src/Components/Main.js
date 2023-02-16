import React from "react";
import style from "./Main.module.css";

const Main = () => {
  const user_data = JSON.parse(localStorage.getItem("user_data"));

  return (
    <main className={style.main}>
      <div className={style.banner}>
        <img
          className={style.banner_img}
          src="https://cdn.discordapp.com/attachments/707559271793164292/1075562550692950046/counter-strike-global-offensive-4k-new-af-2560x1440_1.jpg"
        ></img>
        <h1 className={style.banner_text}>TIME TO MAKE SOME BREAD</h1>
      </div>
      <div className={style.crypto_sec}>
        <img
          className={style.crypto_img}
          src="https://cdn.discordapp.com/attachments/707559271793164292/1075833695736434840/coin.jpg"
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
