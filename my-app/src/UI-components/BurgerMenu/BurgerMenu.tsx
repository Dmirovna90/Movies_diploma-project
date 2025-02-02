import { ReactComponent as Menu } from "../../assets/menuIcon.svg";
import { ReactComponent as Cancel } from "../../assets/cancelIcon.svg";
import style from "./BurgerMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { navActive } from "../../store/activeSlice";
import { AppDispatch, RootState } from "../../store";

const BurgerMenu = () => {
  const { burgermenu, burger } = style;
  const dispatch = useDispatch<AppDispatch>();
  const { isClose } = useSelector((state: RootState) => state.active);
  const closeNavbar = () => dispatch(navActive());

  return (
    <button className={burgermenu} onClick={closeNavbar}>
      {!isClose ? <Menu className={burger} /> : <Cancel className={burger} />}
    </button>
  );
};
export default BurgerMenu;
