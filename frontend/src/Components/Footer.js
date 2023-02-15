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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
            mauris orci.
          </p>
        </div>
        <div className={style.col}>
          <h3>Lorem ipsum</h3>
          <ul>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
          </ul>
        </div>
        <div className={style.col}>
          <h3>Lorem ipsum</h3>
          <ul>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
