import style from "./Games.module.css";
import Button from "../../UI/Button";

const Games = (props) => {
  return (
    <div className={style.box}>
      <h1>Games</h1>
      <div className={style.blocks}>
        <div className={style.wrapper}>
          <h4>TF2</h4>
          <img
            className={style.img}
            src="https://cdn.wallpapersafari.com/68/17/dyLNj2.jpg"
          ></img>
          <Button className={style.btn} text="Play!"></Button>
        </div>
        <div className={style.wrapper}>
          <h4>CS:GO</h4>
          <img
            className={style.img}
            src="https://wallpapers.com/images/featured/b5gx1yg1eegl77ew.jpg"
          ></img>
          <Button className={style.btn} text="Play!"></Button>
        </div>
        <div className={style.wrapper}>
          <h4>DOTA2</h4>
          <img
            className={style.img}
            src="https://wallpapercave.com/wp/wp2532627.jpg"
          ></img>
          <Button className={style.btn} text="Play!"></Button>
        </div>
        <div className={style.wrapper}>
          <h4>Rust</h4>
          <img
            className={style.img}
            src="https://cutewallpaper.org/21/rust-game-wallpaper/Desktop-Wallpapers-Logo-Emblem-RUST-vdeo-game-1920x1080.jpg"
          ></img>
          <Button className={style.btn} text="Play!"></Button>
        </div>
        <div className={style.wrapper}>
          <h4>PUBG</h4>
          <img
            className={style.img}
            src="https://wallpaperaccess.com/full/875246.jpg"
          ></img>
          <Button className={style.btn} text="Play!"></Button>
        </div>
        <div className={style.wrapper}>
          <h4>CoD Warzone 2.0</h4>
          <img
            className={style.img}
            src="https://c4.wallpaperflare.com/wallpaper/557/189/265/call-of-duty-warzone-xbox-one-call-of-duty-black-ops-hd-wallpaper-preview.jpg"
          ></img>
          <Button className={style.btn} text="Play!"></Button>
        </div>
      </div>
      <h5 className={style.bottom_text}>More games coming soon...</h5>
    </div>
  );
};
export default Games;
