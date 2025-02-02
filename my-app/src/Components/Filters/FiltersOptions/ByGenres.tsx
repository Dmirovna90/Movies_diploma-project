import { useDispatch, useSelector } from "react-redux";
import { IOrdering } from "../../../types/types";
import { AppDispatch, RootState } from "../../../store";
import { setGenres } from "../../../store/filterSlice";
import Select from "../../../UI-components/SelectForm/Select/Select";
import Option from "../../../UI-components/SelectForm/Option/Option";
const ByGenres = ({}: IOrdering) => {
  const { genreId } = useSelector((state: RootState) => state.filter);
  const { genres } = useSelector(
    (state: RootState) => state.filterCountriesGenres
  );
  const dispatch = useDispatch<AppDispatch>();
  const handlerGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenres(e.target.value));
  };
  return (
    <div>
      <Select value={genreId} onChange={handlerGenres}>
        <Option value={""} disabled>
          Жанры
        </Option>
        {genres.slice(0, 19).map((x: any) => {
          return (
            <Option key={x.id} value={x.id}>
              {x.genre}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};
export default ByGenres;
