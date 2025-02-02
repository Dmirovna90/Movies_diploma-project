import { useDispatch, useSelector } from "react-redux";
import { IOrdering } from "../../../types/types";
import { AppDispatch, RootState } from "../../../store";
import { setYear } from "../../../store/filterSlice";
import Select from "../../../UI-components/SelectForm/Select/Select";
import Option from "../../../UI-components/SelectForm/Option/Option";
const ByYears = ({}: IOrdering) => {
  const { yearTo, yearFrom } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();
  const handlerYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setYear(e.target.value));
  };
  const filterYear = [];
  const currentYear = 2025;
  const startYear = 1960;
  for (let i = currentYear; i >= startYear; i--) {
    filterYear.push(i);
  }
  const year = yearFrom && yearTo;
  return (
    <div>
      <Select value={year} onChange={handlerYear}>
        <Option value={currentYear} disabled>
          Годы
        </Option>
        {filterYear.map((i: any) => {
          return (
            <Option key={i} value={i}>
              {i}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};
export default ByYears;
