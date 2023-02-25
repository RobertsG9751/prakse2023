import style from "./Servers.module.css";
import Button from "../UI/Button";

const Servers = () => {
  return (
    <div className={style.container}>
      <Button href="steam://connect/51.89.194.63:25584" text="Connect" />
    </div>
  );
};

export default Servers;
