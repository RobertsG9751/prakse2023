import style from "./ServerCard.module.css"

const serverCard = (props) =>{
    return(
        <div className={style.card}>
            <div className={style.content}>
                <div className={style.info}>
                <span>#1 PUBLIC [MM] </span>
                    <span className={style.server_stats}>
                    {props.playerCount}/{props.maxPlayers} |
                    {" " + props.map + "Mirage"}
                    </span>
                </div>

                <div className={style.play}>
                    <a className={style.connect}href="steam://connect/51.89.194.63:25584">
                    <svg className={style.connect_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                        <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
                        <path d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default serverCard