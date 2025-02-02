import { IInput } from "../../types/types";
import style from "./Input.module.scss";
const Input = ({
  type = "text",
  placeholder = "Поиск...",
  name,
  value,
  onChange,
}: IInput) => {
  const { inputField } = style;
  return (
    <input
      className={inputField}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    ></input>
  );
};
export default Input;
