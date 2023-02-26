import style from "./Servers.module.css";
import Button from "../UI/Button";
import { useState, useEffect } from "react";

const Servers = () => {
  useEffect(() => {
    const serverData = async function () {
      const res = await fetch("http://localhost:3001/csgo/51.89.194.63:25584");
      const data = await res.json();
      setServerInfo(data);
    };
    serverData();
  }, []);

  const [serverInfo, setServerInfo] = useState({
    data: { map: "", players: [], maxplayers: 2 },
  });
  console.log(serverInfo);

  return (
    <div className={style.container}>
      <div className={style.server_list}>
        <div className={style.server_card}>
          <img
            className={style.server_img}
            src="https://cdn.discordapp.com/attachments/707559271793164292/1079391020657168414/csgo_wallpaper6_hu8a583a1e4d03891081633cd85e8e5f7f_8730617_1920x1080_resize_lanczos_3.png"
          ></img>
          <div className={style.server_info}>
            <span>#1 PUBLIC [MM] </span>
            <span className={style.server_stats}>
              {serverInfo.data.players.length}/{serverInfo.data.maxplayers} |
              {" " + serverInfo.data.map}
            </span>
          </div>

          <a
            className={style.connect}
            href="steam://connect/51.89.194.63:25584"
          >
            <svg
              className={style.connect_svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
            >
              <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
              <path d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
            </svg>
          </a>
        </div>
        <div className={style.server_card}>
          <img
            className={style.server_img}
            src="https://cdn.discordapp.com/attachments/707559271793164292/1079391020657168414/csgo_wallpaper6_hu8a583a1e4d03891081633cd85e8e5f7f_8730617_1920x1080_resize_lanczos_3.png"
          ></img>
          <div className={style.server_info}>
            <span>#1 PUBLIC [MM] </span>
            <span className={style.server_stats}>
              {serverInfo.data.players.length}/{serverInfo.data.maxplayers} |
              {" " + serverInfo.data.map}
            </span>
          </div>

          <a
            className={style.connect}
            href="steam://connect/51.89.194.63:25584"
          >
            <svg
              className={style.connect_svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
            >
              <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
              <path d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Servers;
