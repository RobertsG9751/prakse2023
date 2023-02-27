import style from "./Section1.module.css"
import Block from "./Block"

const Section1 = (props) =>{
    return(
        <div className={style.box}>
            <h1>How It Works</h1>
            <div className={style.blocks}>
                <Block handlePage={props.handlePage} btn_text={"Servers"}text={"Play your favorite games on our servers."} header={"Play Games"} img={"https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.1920x1080.jpg?t=1668125812"}/>
                <Block btn_text={"Crypto"} text={"Earn crypto as you progress through the game."} header={"Earn crypto"} img={"https://media.istockphoto.com/id/1034363382/photo/coins-of-various-cryptocurrencies.jpg?s=612x612&w=0&k=20&c=-ia1tKJeGeoJ7bWN8i6Udzq92MZ9T9vi--OFT6fVsiA="}/>
                <Block btn_text={"Rewards"} text={"Cash out your earned crypto for rewards."} header={"Redeem Rewards"} img={"https://media.steelseriescdn.com/thumbs/blog/posts/why-are-csgo-skins-priced-so-differently/b01856ef1d3e42279b621c0abb19bae8.jpg.1200x630_q100_crop-scale_optimize_upscale.jpg"}/>
            </div>
        </div>
    )
}
export default Section1