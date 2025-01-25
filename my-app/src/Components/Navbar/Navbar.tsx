import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useContext } from "react";
import { ActiveContext } from "../../context/Context";
const Navbar = () => {
  const context = useContext(ActiveContext);
  const { active, navbar, navItem } = style;
  const closeNavbar = () => context?.SetIsActive(!context.isActive);
  return (
    <div className={!context?.isActive ? navbar : `${navbar} ${active}`} onClick={closeNavbar}>
      <nav>
        <NavLink onClick={closeNavbar} className={style.navItem} to="/">
          Главная
        </NavLink>
        <NavLink onClick={closeNavbar} className={style.navItem} to="/">
          Фильмы
        </NavLink>
        <NavLink onClick={closeNavbar} className={style.navItem} to="/">
          Сериалы
        </NavLink>
        <NavLink onClick={closeNavbar} className={style.navItem} to="/">
          Мультфильмы
        </NavLink>
      </nav>
    </div>
  );
};
export default Navbar;
