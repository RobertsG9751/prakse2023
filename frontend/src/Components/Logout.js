// import style from "./Main.module.css";
// import * as Function from "../functions";

// const Main = () => {
//   const user_data = JSON.parse(localStorage.getItem("user_data"));
//   return (
//     <div className={`center_items ${style.wrapper}`}>
//       <h2 className={style.text}>Your data:</h2>
//       <img src={user_data.photos[2].value} alt="#"></img>
//       <h4 className={style.text}>Username: {user_data.displayName}</h4>
//       <h4 className={style.text}>steamID: {user_data.id}</h4>

//       <button onClick={Function.logout} className={style.button}>
//         LOG OUT
//       </button>
//     </div>
//   );
// };
// export default Main;

import style from "./Logout.module.css";
import React from "react";
import * as Function from "../functions";

const Logout = () => {
  const user_data = JSON.parse(localStorage.getItem("user_data"));
  return (
    <header>
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
      <div className={style.user_info}>
        <img className={style.avatar} src={user_data.photos[2].value}></img>
        <h5 className={style.username}>{user_data.displayName}</h5>
        <svg
          onClick={Function.logout}
          className={style.logout_btn}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </div>
    </header>
  );
};
export default Logout;
