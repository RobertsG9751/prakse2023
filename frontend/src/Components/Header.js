import style from "./Header.module.css";
import Login from "./Login";
import Logout from "./Logout";

const Header = (props) => {

  const handlePage = (e) =>{
    props.handlePage(e.target.textContent)
  }
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <h1>*logo*</h1>
      </div>
      <nav className={style.main_menu}>
        <ul className={style.main_menu_list}>
          <li>
            <a onClick={handlePage} href="#">
              Home
            </a>
          </li>
          <li>
            <a onClick={handlePage} className={style.whitetext} href="#">
              Games
            </a>
          </li>
          <li>
            <a onClick={handlePage} href="#">
              Servers
            </a>
          </li>
          <li>
            <a onClick={handlePage} href="#">About</a>
          </li>
        </ul>
      </nav>
      {props.isLogged === true && <Logout></Logout>}
      {props.isLogged === false && <Login></Login>}
    </header>
  );
};
export default Header;
