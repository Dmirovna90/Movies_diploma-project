import { useDispatch, useSelector } from "react-redux";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Title from "../../UI-components/Title/Title";
import style from "./Home.module.scss";
import { useEffect } from "react";
import { filterMovies, setPage } from "../../store/filterSlice";
import { getFilters } from "../../store/filterCountriesGenresSlice";
import Pagination from "../../Components/Pagination/Pagination";
import { AppDispatch, RootState } from "../../store";
import FiltersBody from "../../Components/Filters/FiitersBody/FiltersBody";
import ByGenres from "../../Components/Filters/FiltersOptions/ByGenres";
import ByCountries from "../../Components/Filters/FiltersOptions/ByCountries";
import ByYears from "../../Components/Filters/FiltersOptions/ByYears";
const Home = () => {
  const { container, cardsWrap } = style;
  const dispatch = useDispatch<AppDispatch>();
  const {
    results,
    type,
    countryId,
    genreId,
    order,
    loading,
    error,
    yearTo,
    yearFrom,
    totalItems,
    currentPage,
  } = useSelector((state: RootState) => state.filter);
  useEffect(() => {
    dispatch(
      filterMovies({
        country: countryId,
        order: order,
        type: type,
        genre: genreId,
        yearTo: yearTo,
        yearFrom: yearFrom,
        page: currentPage,
      })
    );
    dispatch(getFilters());
  }, [order, countryId, genreId, yearTo, yearFrom, currentPage]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className={container}>
      <Title title={"Библиотека MOVIES"} />
      <FiltersBody>
        <ByGenres />
        <ByCountries />
        <ByYears />
      </FiltersBody>
      <div className={cardsWrap}>
        {results.map((item: any) => {
          return (
            <div key={item.kinopoiskId}>
              <CardMovie
                kinopoiskId={item.kinopoiskId}
                posterUrl={item.posterUrl}
                nameRu={item.nameRu}
                ratingKinopoisk={item.ratingKinopoisk}
                year={item.year}
                nameOriginal={item.nameOriginal}
              />
            </div>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        setPage={(pageNumber: number) => dispatch(setPage(pageNumber))}
      />
    </div>
  );
};
export default Home;
