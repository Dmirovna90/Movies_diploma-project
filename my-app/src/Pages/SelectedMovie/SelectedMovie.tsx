import { useNavigate, useParams } from "react-router-dom";
import Title from "../../UI-components/Title/Title";
import style from "./SelectedMovie.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { getMovieInfo } from "../../store/selectedMovieSlice";
import Crumbs from "../../UI-components/Crumbs/Crumbs";
const SelectedMovie = () => {
  const navigate = useNavigate();
  const { movieInfo, loading, error } = useSelector((state) => state.movie);
  const { kinopoiskId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieInfo({ kinopoiskId }));
  }, [kinopoiskId]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className={style.container} key={movieInfo.kinopoiskId}>
      <Crumbs />
      <div className={style.wrap}>
        <div className={style.posterWrap}>
          <img className={style.poster} src={movieInfo.posterUrl}></img>
        </div>
        <div className={style.movieInfoWrap}>
          <Title title={movieInfo.nameRu} />
          <p>{movieInfo.nameOriginal}</p>
          <p>{movieInfo.description}</p>
          <p>
            Год производства: <span>{movieInfo.year}</span>
          </p>
          <p className={style.country}>
            Страна:
            {movieInfo.countries.map((item: any) => {
              return <span key={item.country}> {item.country}</span>;
            })}
          </p>
          <p>
            Жанр:
            {movieInfo.genres.map((item: any) => {
              return <span key={item.genre}> {item.genre} /</span>;
            })}
          </p>
          <p>
            Слоган: <span>"{movieInfo.slogan}"</span>
          </p>
          <p>
            Время: <span>{movieInfo.filmLength} минут</span>
          </p>
        </div>
        <div className={style.ratingWrap}>
          <p>{movieInfo.ratingKinopoisk}</p>
          <p>
            {movieInfo.ratingKinopoiskVoteCount} <span>оценки</span>
          </p>
          <p>
            {movieInfo.reviewsCount} <span>рецензий</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SelectedMovie;
