import style from "./Servers.module.css";
import Button from "../UI/Button";

const Servers = () => {
  const serverData = async function () {
    const res = await fetch("http://localhost:3001/csgo/51.89.194.63:25584");
    const data = await res.json();
    console.log(data);
  };

  serverData();

  return (
    <div className={style.container}>
      <Button href="steam://connect/51.89.194.63:25584" text="Connect" />
    </div>
  );
};

export default Servers;
