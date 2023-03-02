import style from "./About.module.css";
import Button from "../../UI/Button";

const About = props =>{
    return(
        <div className={style.wrapper}>
            <h2 className={style.header}>About</h2>
            <div className={style.block}>
                <img className={style.img} src="https://www.esportsportal.com/wp-content/uploads/2019/08/CSGO-WP-1.jpg"></img>
                <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quod magnam tempore, dignissimos sint dicta repellat debitis, corporis molestiae, unde non obcaecati ea dolores commodi! Molestias consequatur expedita libero debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat quidem reiciendis minus. Fugiat, magni. Dicta eius earum ipsum reiciendis, dolores in dolor, maiores nulla, corrupti eveniet incidunt alias quo?</p>
            </div>
            <div className={`${style.block} ${style.middle}`}>
            <img className={style.img} src="https://c4.wallpaperflare.com/wallpaper/905/666/494/background-render-fon-bitcoin-bitcoin-hd-wallpaper-preview.jpg"></img>
                <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quod magnam tempore, dignissimos sint dicta repellat debitis, corporis molestiae, unde non obcaecati ea dolores commodi! Molestias consequatur expedita libero debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat quidem reiciendis minus. Fugiat, magni. Dicta eius earum ipsum reiciendis, dolores in dolor, maiores nulla, corrupti eveniet incidunt alias quo?</p>
            </div>
            <div className={style.block}>
                <img className={style.img} src="https://e0.pxfuel.com/wallpapers/958/730/desktop-wallpaper-cs-go-skin.jpg"></img>
                <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quod magnam tempore, dignissimos sint dicta repellat debitis, corporis molestiae, unde non obcaecati ea dolores commodi! Molestias consequatur expedita libero debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat quidem reiciendis minus. Fugiat, magni. Dicta eius earum ipsum reiciendis, dolores in dolor, maiores nulla, corrupti eveniet incidunt alias quo?</p>
            </div>
            <Button className={style.button} text="Start Now!"></Button>
        </div>
    )
}
export default About