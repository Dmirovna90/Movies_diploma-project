import { useDispatch, useSelector } from "react-redux";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Title from "../../UI-components/Title/Title";
import style from "./SearchResut.module.scss";
import { useEffect } from "react";
import { searchMovies } from "../../store/seacrhSlice";
import Crumbs from "../../UI-components/Crumbs/Crumbs";
import { AppDispatch, RootState } from "../../store";
const SearchResut = () => {
  const { container, cardsWrap } = style;
  const dispatch = useDispatch<AppDispatch>();
  const { results, searchQuery, loading, error } = useSelector(
    (state: RootState) => state.search
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
    <div className={container}>
      <Crumbs />
      <Title title={"Результаты поиска >"} />
      <div className={cardsWrap}>
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
