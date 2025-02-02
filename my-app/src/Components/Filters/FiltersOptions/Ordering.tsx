import { useDispatch, useSelector } from "react-redux";
import { IOrdering } from "../../../types/types";
import { AppDispatch, RootState } from "../../../store";
import { setOrdering } from "../../../store/filterSlice";
import Select from "../../../UI-components/SelectForm/Select/Select";
import Option from "../../../UI-components/SelectForm/Option/Option";
const Ordering = ({}: IOrdering) => {
  const { order } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();
  const handlerOrdering = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrdering(e.target.value));
  };
  return (
    <div>
      <Select value={order} onChange={handlerOrdering}>
        <Option value={""} disabled>
          Сортировать по
        </Option>
        <Option value={"RATING"}>рейтингу (по умолчанию)</Option>
        <Option value={"YEAR"}>дате добавления</Option>
        <Option value={"NUM_VOTE"}>количеству голосов</Option>
      </Select>
    </div>
  );
};
export default Ordering;
