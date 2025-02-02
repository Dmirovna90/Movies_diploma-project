import { ITitle } from "../../types/types";
import { ReactComponent as LogoMovies } from "../../assets/logo_part.svg";
import style from "./Logo.module.scss";
import { NavLink } from "react-router-dom";
const Logo = ({ logo }: ITitle) => {
  const { logoWrap, link, logoSvg, logotext } = style;
  return (
    <div className={logoWrap}>
      <NavLink to={`/`} className={link}>
        <LogoMovies className={logoSvg} />
        {!!logo && <span className={logotext}>{logo}</span>}
      </NavLink>
    </div>
  );
};
export default Logo;
