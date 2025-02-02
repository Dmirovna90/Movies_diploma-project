import { useDispatch, useSelector } from "react-redux";
import { IOrdering } from "../../../types/types";
import { AppDispatch } from "../../../store";
import { setCountries } from "../../../store/filterSlice";
import Select from "../../../UI-components/SelectForm/Select/Select";
import Option from "../../../UI-components/SelectForm/Option/Option";
const ByCountries = ({}: IOrdering) => {
  const { countryId } = useSelector((state: any) => state.filter);
  const { countries } = useSelector((state: any) => state.filterCountriesGenres);
  const dispatch = useDispatch<AppDispatch>();
  const handlerCountries = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCountries(e.target.value));
  };
  return (
    <div>
      <Select value={countryId} onChange={handlerCountries}>
        <Option value={""} disabled>
          Страны
        </Option>
        {countries.slice(0, 35).map((item: any) => {
          return (
            <Option key={item.id} value={item.id}>
              {item.country}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};
export default ByCountries;
