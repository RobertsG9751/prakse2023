import React from "react";
import style from "./Main.module.css";
import Button from "../UI/Button";
import Section1 from "./Section1/Section1";

const Main = (props) => {
  const user_data = JSON.parse(localStorage.getItem("user_data"));

  return (
    <main className={style.main}>
      <div className={style.banner}>
        <img
          className={style.banner_img}
          src="https://prakse2023-frontend.vercel.app/images/counter-strike-global-offensive-banner.jpg"
        ></img>
        <h1 className={style.banner_text}>TIME TO MAKE SOME BREAD</h1>
      </div>
      <Section1 handlePage={props.handlePage}></Section1>
      <div className={style.crypto_sec}>
        <img
          className={style.crypto_img}
          src="https://prakse2023-frontend.vercel.app/images/coin.jpg"
        ></img>
        <div className={style.crypto_wrapper}>
          <h1 className={style.crypto_text}>
            Get paid securely in cryptocurrency
          </h1>
          <Button text={"Read More"}></Button>
        </div>
      </div>
    </main>
  );
};
export default Main;
