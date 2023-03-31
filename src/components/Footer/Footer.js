import { NavLink } from "react-router-dom";
import "./style.css";

import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import vk from "./../../img/icons/vk.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <NavLink to="https://vk.ru">
              <li className="social__item">
                <img src={vk} alt="Link" />
              </li>
            </NavLink>
            <NavLink to="https://instagram.com">
              <li className="social__item">
                <img src={instagram} alt="Link" />
              </li>
            </NavLink>
            <NavLink to="https://github.com/ArtMaf777">
              <li className="social__item">
                <img src={gitHub} alt="Link" />
              </li>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/arthur-atoyan/">
              <li className="social__item">
                <img src={linkedIn} alt="Link" />
              </li>
            </NavLink>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
