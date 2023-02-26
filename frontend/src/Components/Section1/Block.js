import style from "./Block.module.css";
import Button from "../../UI/Button";

const Block = (props) => {
  return (
    <div className={style.wrapper}>
      <h4 className={style.header}>{props.header}</h4>
      <img className={style.img} src={props.img}></img>
      <p className={style.p}>{props.text}</p>
      <Button text={props.btn_text}></Button>
    </div>
  );
};
export default Block;
