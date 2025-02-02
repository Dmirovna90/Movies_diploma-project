import style from "./Button.module.scss";
import { IButton } from "../../types/types";
const Button = ({ children, isDisabled, click, type }: IButton) => {
  const { button } = style;
  return (
    <button
      className={button}
      disabled={isDisabled}
      onClick={click}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
