import { useDispatch, useSelector } from "react-redux";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Title from "../../UI-components/Title/Title";
import style from "./FilterPage.module.scss";
import { useEffect } from "react";
import { ReactComponent as Down } from "../../assets/down.svg";
import { ReactComponent as Up } from "../../assets/up.svg";


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
import { toggleActive } from "../../store/activeSlice";
import Button from "../../UI-components/Button/Button";
import Pagination from "../../Components/Pagination/Pagination";
import { AppDispatch } from "../../store";
import Select from "../../UI-components/SelectForm/Select/Select";
const FilterPage = () => {
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
  } = useSelector((state:any) => state.filter);
  const { isActive } = useSelector((state:any) => state.active);
  const { genres, countries } = useSelector(
    (state:any) => state.filterCountriesGenres
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
  const startYear = 1960;
  for (let i = startYear; i <= currentYear; i++) {
    filterYear.push(i);
  }
  const year = yearFrom && yearTo;
  return (
    <div className={style.container}>
      <Title title={"Библиотека MOVIES"} />
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
        <select value={order} onChange={handlerOrdering}>
          <option value={""} disabled>
            Сортировать по
          </option>
          <option value={"RATING"}>рейтингу (по умолчанию)</option>
          <option value={"YEAR"}>дате добавления</option>
          <option value={"NUM_VOTE"}>количеству голосов</option>
        </select>
      </div>
      <div>
        <Button
          type={"button"}
          isDisabled={false}
          click={() => {
            dispatch(toggleActive());
          }}
          children={<div className={style.down}>Фильтры {!isActive?(<Down/>):(<Up/>)}</div>}
        />
        <div
          className={
            !isActive ? style.filter : `${style.filter} ${style.active}`
          }
        >
          <div className={style.ordering}>
            <select value={genreId} onChange={handlerGenres}>
              <option key = {1} value={""} disabled = {true} children = {'Жанры'}/>

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
            <select value={countryId} onChange={handlerCountries}>
              <option value="" disabled>
                Страны
              </option>
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
            <select value={year} onChange={handlerYear}>
              <option value={currentYear} disabled>
                Годы
              </option>
              {filterYear.map((i: any) => {
                return (
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
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
export default FilterPage;
