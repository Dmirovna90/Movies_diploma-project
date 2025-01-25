import { ITitle } from "../../types/types";
import style from "./Title.module.scss";
const Title = ({ title }: ITitle) => {
  return (
    <div className={style.titleWrap}>
      {!!title && <h1 className={style.titleText}>{title}</h1>}
    </div>
  );
};
export default Title;
