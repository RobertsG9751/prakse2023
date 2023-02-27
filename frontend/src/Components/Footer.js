import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.row}>
        <div className={style.col}>
          <span href="#" className={style.logo}>
            *logo*
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
        <div className={style.col}>
          <h3>Policies</h3>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className={style.col}>
          <h3>Communities</h3>
          <ul>
            <li>
              <a href="#">Servers</a>
            </li>
            <li>
              <a href="#">Discord Server</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <p className={style.copyright}>Copyright © 2023 studijaIT.csgo.com All rights reserved.</p>
    </footer>
  );
};

export default Footer;
