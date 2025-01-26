import { useDispatch, useSelector } from "react-redux";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Title from "../../UI-components/Title/Title";
import style from "./SearchResut.module.scss";
import { useEffect } from "react";
import { searchMovies } from "../../store/seacrhSlice";
import Crumbs from "../../UI-components/Crumbs/Crumbs";
const SearchResut = () => {
  const dispatch = useDispatch();
  const { results, searchQuery, loading, error } = useSelector(
    (state) => state.search
  );
  useEffect(() => {
    dispatch(
      searchMovies({
        keyword: searchQuery,
      })
    );
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className={style.container}>
      <Crumbs/>
      <Title title={"Результаты поиска >"} />
      <div className={style.cardsWrap}>
        {results.map((film: any) => {
          return (
            <div key={film.filmId}>
              <CardMovie
                kinopoiskId={film.filmId}
                posterUrl={film.posterUrl}
                nameRu={film.nameRu}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SearchResut;
