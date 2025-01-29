import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies, setPage } from "../../store/moviesSlice";
import style from "./Home.module.scss";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Title from "../../UI-components/Title/Title";

const Home = () => {
  const dispatch = useDispatch<any>();
  const { movies, loading, error, type, currentPage, totalItems } =
    useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(
      fetchMovies({
        type: "TOP_250_TV_SHOWS",
        page: currentPage,
      }),
    );
  }, [type, currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
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
      <Title title={"Популярные сериалы >"} />
      <div className={style.cardsWrap}>
        {movies.map((item: any) => {
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
export default Home;
