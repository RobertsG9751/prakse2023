import style from "./Servers.module.css";
import Button from "../../UI/Button";
import { useState, useEffect } from "react";
import ServerCard from "./ServerCard";

const Servers = () => {
  useEffect(() => {
    const serverData = async function () {
      const res = await fetch(
        "https://prakse2023-backend.cyclic.app/csgo/51.89.194.63:25584"
      );
      const data = await res.json();
      setServerInfo(data);
    };
    serverData();
  }, []);

  const [serverInfo, setServerInfo] = useState({
    data: { map: "", players: [], maxplayers: 2, ping: 0 },
  });
  console.log(serverInfo);

  return (
    <div className={style.container}>
      <h2 className={style.heading}>Servers</h2>
      <div className={style.server_list}>
        <ServerCard
          map={serverInfo.data.map}
          maxPlayers={serverInfo.data.maxplayers}
          playerCount={serverInfo.data.players.length}
          ping={serverInfo.data.ping}
        ></ServerCard>
        <ServerCard
          map={serverInfo.data.map}
          maxPlayers={serverInfo.data.maxplayers}
          playerCount={serverInfo.data.players.length}
          ping={serverInfo.data.ping}
        ></ServerCard>
        <ServerCard
          map={serverInfo.data.map}
          maxPlayers={serverInfo.data.maxplayers}
          playerCount={serverInfo.data.players.length}
          ping={serverInfo.data.ping}
        ></ServerCard>
        <ServerCard
          map={serverInfo.data.map}
          maxPlayers={serverInfo.data.maxplayers}
          playerCount={serverInfo.data.players.length}
          ping={serverInfo.data.ping}
        ></ServerCard>
        <ServerCard
          map={serverInfo.data.map}
          maxPlayers={serverInfo.data.maxplayers}
          playerCount={serverInfo.data.players.length}
          ping={serverInfo.data.ping}
        ></ServerCard>
        <ServerCard
          map={serverInfo.data.map}
          maxPlayers={serverInfo.data.maxplayers}
          playerCount={serverInfo.data.players.length}
          ping={serverInfo.data.ping}
        ></ServerCard>
      </div>
    </div>
  );
};

export default Servers;
