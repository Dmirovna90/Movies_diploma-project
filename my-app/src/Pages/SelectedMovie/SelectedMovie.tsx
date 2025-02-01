import { useParams } from "react-router-dom";
import style from "./SelectedMovie.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieInfo } from "../../store/selectedMovieSlice";
import Crumbs from "../../UI-components/Crumbs/Crumbs";
import TitleSelectedMovie from "../../UI-components/TitleSelectedMovie/TitleSelectedMovie";
import PointSelectedMovie from "../../UI-components/PointSelectedMovie/PointSelectedMovie";
import Raiting from "../../UI-components/Raiting/Raiting";
import { AppDispatch } from "../../store";
const SelectedMovie = () => {
  const { movieInfo, loading, error } = useSelector((state:any) => state.movie);
  const { kinopoiskId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
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
          <TitleSelectedMovie
            description={movieInfo.description}
            nameRu={movieInfo.nameRu}
            nameOriginal={movieInfo.nameOriginal}
          />
          <PointSelectedMovie
            topic={"Год производства"}
            point={movieInfo.year}
          />
          <PointSelectedMovie
            topic={"Страна"}
            point={movieInfo.countries.map((item: any) => {
              return <span key={item.country}> {item.country}, </span>;
            })}
          ></PointSelectedMovie>
          <PointSelectedMovie
            topic={"Жанр"}
            point={movieInfo.genres.map((item: any) => {
              return <span key={item.genre}> {item.genre}, </span>;
            })}
          ></PointSelectedMovie>
          {movieInfo.serial ? (
            <>
              <PointSelectedMovie topic={"Сериал"} point={"Да"} />
              <PointSelectedMovie
                topic={"Продолжительность серии"}
                point={`${movieInfo.filmLength} минут`}
              />
            </>
          ) : (
            <PointSelectedMovie topic={"Время"} point={`${movieInfo.filmLength} минут`} />
          )}
          {movieInfo.slogan&&<PointSelectedMovie topic={"Слоган"} point={movieInfo.slogan} />}
        </div>
        <Raiting
            reviewsCount={movieInfo.reviewsCount}
            ratingKinopoisk={movieInfo.ratingKinopoisk}
            ratingKinopoiskVoteCount={movieInfo.ratingKinopoiskVoteCount}        />
      </div>
    </div>
  );
};
export default SelectedMovie;
