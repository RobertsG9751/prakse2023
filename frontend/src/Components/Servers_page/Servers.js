import style from "./Servers.module.css";
import Button from "../../UI/Button";
import { useState, useEffect } from "react";
import ServerCard from "./ServerCard";

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
      <ServerCard map={serverInfo.data.map} maxPlayers={serverInfo.data.maxplayers} playerCount={serverInfo.data.players.length}></ServerCard>
      <ServerCard map={serverInfo.data.map} maxPlayers={serverInfo.data.maxplayers} playerCount={serverInfo.data.players.length}></ServerCard>
      </div>
    </div>
  );
};

export default Servers;
