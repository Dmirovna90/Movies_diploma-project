import { useDispatch, useSelector } from "react-redux";
import Button from "../../../UI-components/Button/Button";
import style from "./FiltersBody.module.scss";
import { AppDispatch } from "../../../store";
import { toggleActive } from "../../../store/activeSlice";
import { ReactComponent as Down } from "../../../assets/down.svg";
import { ReactComponent as Up } from "../../../assets/up.svg";
import Ordering from "../FiltersOptions/Ordering";
import { IChildren } from "../../../types/types";
const FiltersBody = ({children}: IChildren) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isActive } = useSelector((state: any) => state.active);
  return (
    <div>
      <div className={style.filtersHeader}>
        <Button
          type={"button"}
          isDisabled={false}
          click={() => dispatch(toggleActive())}
          children={
            <div className={style.down}>
              Фильтры {!isActive ? <Down /> : <Up />}
            </div>
          }
        />
        <Ordering />
      </div>
      <div
        className={!isActive ? style.filter : `${style.filter} ${style.active}`}
      >
        {children}
      </div>
    </div>
  );
};
export default FiltersBody;
