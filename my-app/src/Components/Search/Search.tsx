import { useDispatch, useSelector } from "react-redux";
import Input from "../../UI-components/Input/Input";
import style from "./Search.module.scss";
import { useEffect } from "react";
import { searchMovies, setSearchQuery } from "../../store/seacrhSlice";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
const Search = () => {
  const { searchQuery } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(
      searchMovies({
        keyword: searchQuery,
      })
    );
  }, []);
  const handlerSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      searchMovies({
        keyword: searchQuery,
      })
    );
    navigate("/search");
  };
  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setSearchQuery(value));
  };
  const { searchWrap } = style;
  return (
    <form onSubmit={handlerSubmit} className={searchWrap}>
      <Input
        type={"text"}
        placeholder={"Search..."}
        value={searchQuery}
        onChange={handlerInput}
      />
    </form>
  );
};
export default Search;
