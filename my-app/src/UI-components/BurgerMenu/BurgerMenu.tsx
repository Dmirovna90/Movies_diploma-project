import { useContext } from "react";
import { ActiveContext } from "../../context/Context";
import { ReactComponent as Menu } from "../../assets/menuIcon.svg";
import { ReactComponent as Cancel } from "../../assets/cancelIcon.svg";
import style from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  const context = useContext(ActiveContext);
  return (
    <button
      className={style.burgermenu}
      onClick={() => context?.SetIsActive(!context.isActive)}
    >
      {!context?.isActive ? (
        <Menu className={style.burger} />
      ) : (
        <Cancel className={style.burger} />
      )}
    </button>
  );
};
export default BurgerMenu;
