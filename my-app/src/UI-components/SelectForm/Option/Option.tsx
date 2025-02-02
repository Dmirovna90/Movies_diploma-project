import { IOrdering } from "../../../types/types";
const Option = ({ value, children, disabled }: IOrdering) => {
  return (
    <option
      value={value}
      disabled={disabled}
    >
      {children}
    </option>
  );
};
export default Option;
