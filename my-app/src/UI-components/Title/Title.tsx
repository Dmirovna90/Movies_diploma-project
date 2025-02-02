import { ITitle } from "../../types/types";
import style from "./Title.module.scss";
const Title = ({ title }: ITitle) => {
  const { titleWrap, titleText } = style;
  return (
    <div className={titleWrap}>
      {!!title && <h1 className={titleText}>{title}</h1>}
    </div>
  );
};
export default Title;
