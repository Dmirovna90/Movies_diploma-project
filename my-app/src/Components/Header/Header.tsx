import style from "./Header.module.scss";
import BurgerMenu from "../../UI-components/BurgerMenu/BurgerMenu";
import Logo from "../../UI-components/Logo/Logo";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.headerWrap}>
          <BurgerMenu />
          <Logo logo = {'MOVIES'}/>
        </div>
      </div>
    </header>
  );
};
export default Header;
