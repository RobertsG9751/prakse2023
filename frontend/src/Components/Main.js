import style from "./Main.module.css";
import * as Function from "../functions";

const Main = () => {
  const user_data = JSON.parse(localStorage.getItem("user_data"));
  return (
    <div className={`center_items ${style.wrapper}`}>
      <h2 className={style.text}>Your data:</h2>
      <img src={user_data.photos[2].value} alt="#"></img>
      <h4 className={style.text}>Username: {user_data.displayName}</h4>
      <h4 className={style.text}>steamID: {user_data.id}</h4>

      <button onClick={Function.logout} className={style.button}>
        LOG OUT
      </button>
    </div>
  );
};
export default Main;
