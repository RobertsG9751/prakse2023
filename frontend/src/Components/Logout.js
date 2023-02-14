import style from "./Logout.module.css";
import React from "react";
import * as Function from "../functions";

const Logout = () => {
  const user_data = JSON.parse(localStorage.getItem("user_data"));

  return (
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
  );
};
export default Logout;
