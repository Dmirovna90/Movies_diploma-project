import { useDispatch, useSelector } from "react-redux";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Title from "../../UI-components/Title/Title";
import style from "./FilterPage.module.scss";
import { useEffect } from "react";
import Crumbs from "../../UI-components/Crumbs/Crumbs";
import { filterMovies, setOrdering, setType } from "../../store/filterSlice";
const FilterPage = () => {
  const dispatch = useDispatch();
  const { results, type, countries, order, loading, error, genres } = useSelector(
    (state) => state.filter
  );
  useEffect(() => {
    dispatch(
      filterMovies({
        countries: countries,
        order: order,
        type: type,
        genres: genres,
      })
    );
  }, [order, type]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  const handlerOrdering = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrdering(e.target.value));
};
const handlerType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setType(e.target.value));
};
  return (
    <div className={style.container}>
      <Crumbs />
      <Title title={"Результаты поиска >"} />
      <div className={style.ordering}>
        <label>Сортировка:</label>
        <select value={type} onChange={handlerType}>
          <option value={"ALL"}>Все категории</option>
          <option value={"FILM"}>Фильмы</option>
          <option value={"TV_SERIES"}>Сериалы</option>
          <option value={"MINI_SERIES"}>Мини-сериалы</option>
        </select>
      </div>
      <div className={style.ordering}>
        <label>Сортировка:</label>
        <select value={order} onChange={handlerOrdering}>
          <option value={""}>по умолчанию</option>
          <option value={"YEAR"}>дате добавления</option>
          <option value={"NUM_VOTE"}>количеству голосов</option>
          <option value={"RATING"}>рейтингу</option>
        </select>
      </div>
      <div className={style.cardsWrap}>
        {results.map((item: any) => {
          return (
            <div key={item.kinopoiskId}>
              <CardMovie
                kinopoiskId={item.kinopoiskId}
                posterUrl={item.posterUrl}
                nameRu={item.nameRu}
                ratingKinopoisk={item.ratingKinopoisk}
                year={item.year}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FilterPage;
