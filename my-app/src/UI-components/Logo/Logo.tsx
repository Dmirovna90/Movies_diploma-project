import { ITitle } from "../../types/types";
import { ReactComponent as LogoMovies } from "../../assets/logo_part.svg";
import style from "./Logo.module.scss";
import { NavLink } from "react-router-dom";
const Logo = ({ logo }: ITitle) => {
  return (
    <div className={style.logoWrap}>
      <NavLink to={`/`} className={style.link}>
        <LogoMovies className={style.logoSvg} />
        {!!logo && <span className={style.logotext}>{logo}</span>}
      </NavLink>
    </div>
  );
};
export default Logo;
