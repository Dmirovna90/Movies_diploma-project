import { ITitle } from "../../types/types";
import { ReactComponent as LogoMovies} from "../../assets/logo_part.svg";
import style from "./Logo.module.scss";
const Logo = ({ logo }: ITitle) => {
  return (
    <div className={style.logoWrap}>
      <LogoMovies className = {style.logoSvg}/>
      {!!logo && <span className={style.logotext}>{logo}</span>}
    </div>
  );
};
export default Logo