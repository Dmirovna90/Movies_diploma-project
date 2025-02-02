import style from "./Header.module.scss";
import BurgerMenu from "../../UI-components/BurgerMenu/BurgerMenu";
import Logo from "../../UI-components/Logo/Logo";
import Search from "../Search/Search";
const Header = () => {
  const { header, container, headerWrap, logoBtnWrap, wrap } = style;
  return (
    <header className={header}>
      <div className={container}>
        <div className={headerWrap}>
          <div className={logoBtnWrap}>
            <BurgerMenu />
            <Logo logo={"MOVIES"} />
          </div>
          <div className={wrap}>
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
