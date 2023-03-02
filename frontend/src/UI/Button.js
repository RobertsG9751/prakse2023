import style from "./Button.module.css";

const Button = (props) => {
  return (
    <a onClick={props.onClick} href={props.href} className={`${style.button} ${props.className}`}>
      <span>{props.text}</span>
    </a>
  );
};
export default Button;
