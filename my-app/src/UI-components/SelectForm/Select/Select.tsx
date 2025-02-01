import { IOrdering } from "../../../types/types";
import style from './Select.module.scss'
const Select = ({ value, onChange, children }: IOrdering) => {
  return (
    <select value={value} onChange={onChange} className = {style.select}>
      {children}
    </select>
  );
};
export default Select;
