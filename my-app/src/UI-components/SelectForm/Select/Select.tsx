import { IOrdering } from "../../../types/types";
import style from "./Select.module.scss";
const Select = ({ value, onChange, children }: IOrdering) => {
  const { select } = style;
  return (
    <select value={value} onChange={onChange} className={select}>
      {children}
    </select>
  );
};
export default Select;
