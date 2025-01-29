import { useDispatch, useSelector } from "react-redux";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Title from "../../UI-components/Title/Title";
import style from "./FilterPage.module.scss";
import { useEffect } from "react";
import Crumbs from "../../UI-components/Crumbs/Crumbs";
import {
  filterMovies,
  setCountries,
  setGenres,
  setOrdering,
  setPage,
  setType,
  setYear,
} from "../../store/filterSlice";
import { getFilters } from "../../store/filterCountriesGenresSlice";
const FilterPage = () => {
  const dispatch = useDispatch();
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
  } = useSelector((state) => state.filter);
  const { genres, countries } = useSelector(
    (state) => state.filterCountriesGenres
  );
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
  }, [order, type, countryId, genreId, yearTo, yearFrom, currentPage]);
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
  const handlerCountries = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCountries(e.target.value));
  };
  const handlerGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenres(e.target.value));
  };
  const handlerYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setYear(e.target.value));
  };
  const filterYear = [];
  const currentYear = 2025;
  const startYear = 1980;
  for (let i = startYear; i <= currentYear; i++) {
    filterYear.push(i);
  }
  const handlerPageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
  };
  const handlerPrev = () => {
    if (currentPage > 1) dispatch(setPage(currentPage - 1));
  };
  const handlerNext = () => {
    if (currentPage < totalPage) dispatch(setPage(currentPage + 1));
  };
  const year = yearFrom && yearTo;
  const totalPage = Math.ceil(totalItems / 20);
  const renderPageNumber = () => {
    const pageNumber = [];
    const maxPageNumber = 10;
    const startPage = Math.max(currentPage - Math.floor(maxPageNumber / 2), 1);
    const endPage = Math.min(startPage + maxPageNumber - 1, totalPage);
    for (let i = startPage; i <= endPage; i++) {
      pageNumber.push(
        <button
          style={{ color: i === currentPage && "#ff5c00" }}
          className={style.page}
          key={i}
          onClick={() => handlerPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumber;
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
      <div className={style.ordering}>
        <label>Сортировка по жанрам</label>
        <select value={genreId} onChange={handlerGenres}>
          {genres.slice(0, 19).map((x: any) => {
            return (
              <option key={x.id} value={x.id}>
                {x.genre}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.ordering}>
        <label>Сортировка по странам</label>
        <select value={countryId} onChange={handlerCountries}>
          {countries.slice(0, 35).map((item: any) => {
            return (
              <option key={item.id} value={item.id}>
                {item.country}
              </option>
            );
          })}
        </select>
      </div>

      <div className={style.ordering}>
        <label>Сортировка по году</label>
        <select value={year} onChange={handlerYear}>
          {filterYear.map((i: any) => {
            return (
              <option key={i} value={i}>
                {i}
              </option>
            );
          })}
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
      <div className={style.prevNextWrap}>
        <div
          className={style.prevWrap}
          onClick={handlerPrev}
          disabled={currentPage === 1}
        >
          <div className={style.arrowPrev}>
            <p>Prev</p>
          </div>
          <div className={style.prevDescription}>
            <span className={style.prev}>Prev</span>
          </div>
        </div>
        <div className={style.pageNumbers}>{renderPageNumber()}</div>
        <div
          className={style.prevWrap}
          onClick={handlerNext}
          disabled={currentPage === totalPage}
        >
          <div className={style.nextDescription}>
            <span className={style.next}>Next</span>
          </div>
          <div className={style.arrowNext}>
            <p>Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilterPage;
