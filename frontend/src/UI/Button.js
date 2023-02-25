import style from "./Button.module.css";

const Button = (props) => {
  return (
    <a href={props.href} className={style.button}>
      <span>{props.text}</span>
    </a>
  );
};
export default Button;
