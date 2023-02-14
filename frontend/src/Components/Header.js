import style from "./Header.module.css"
import Login from "./Login"
import Logout from "./Logout"

const Header = (props) =>{
    return(
        <header className={style.header}>
            <div className={style.logo}>
                <h1>*logo*</h1>
            </div>
            <nav className={style.main_menu}>
                <ul className={style.main_menu_list}>
                <li>Home</li>
                <li>Games</li>
                <li>Servers</li>
                <li>About</li>
                </ul>
            </nav>
            {props.isLogged===true&&(<Logout></Logout>)}
            {props.isLogged===false&&(<Login></Login>)}
        </header>
    )
}
export default Header