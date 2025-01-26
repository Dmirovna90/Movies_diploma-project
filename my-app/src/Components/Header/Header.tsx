import style from "./Header.module.scss";
import BurgerMenu from "../../UI-components/BurgerMenu/BurgerMenu";
import Logo from "../../UI-components/Logo/Logo";
import Search from "../Search/Search";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.headerWrap}>
          <div className = {style.logoBtnWrap}>
            <BurgerMenu />
          <Logo logo = {'MOVIES'}/>
          </div>
          <div className= {style.wrap}>
                     <Search/> 
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
