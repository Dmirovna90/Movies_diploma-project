import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { navActive } from "../../store/activeSlice";
import { AppDispatch } from "../../store";
const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isClose } = useSelector((state:any) => state.active);
  const { active, navbar, navItem, nav } = style;
  const closeNavbar = () => dispatch(navActive());
  return (
    <div
      className={!isClose ? navbar : `${navbar} ${active}`}
      onClick={closeNavbar}
    >
      <nav className={!isClose ? nav : `${nav} ${active}`}>
        <NavLink onClick={closeNavbar} className={style.navItem} to="/all">
          Библиотека MOVIES
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
