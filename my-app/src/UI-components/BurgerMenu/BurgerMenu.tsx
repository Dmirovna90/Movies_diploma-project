import { ReactComponent as Menu } from "../../assets/menuIcon.svg";
import { ReactComponent as Cancel } from "../../assets/cancelIcon.svg";
import style from "./BurgerMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { navActive } from "../../store/activeSlice";
import { AppDispatch } from "../../store";

const BurgerMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isClose } = useSelector((state:any) => state.active);
  const closeNavbar = () => dispatch(navActive());

  return (
    <button
      className={style.burgermenu}
      onClick={closeNavbar}
    >
      {!isClose ? (
        <Menu className={style.burger} />
      ) : (
        <Cancel className={style.burger} />
      )}
    </button>
  );
};
export default BurgerMenu;
