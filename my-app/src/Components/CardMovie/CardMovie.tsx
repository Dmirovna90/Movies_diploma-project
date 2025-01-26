import { NavLink } from "react-router-dom";
import { IMovie } from "../../types/types";
import style from "./CardMovies.module.scss";
const CardMovie = ({
  kinopoiskId,
  nameRu,
  posterUrl,
  coverURL,
  year,
  ratingKinopoisk,
}: IMovie) => {
  return (
    <>
      <div className={style.cardWrap}>
        <NavLink to={`/${kinopoiskId}`} className={style.link}>
          <div className={style.imgWrap}>
            <img alt={coverURL} src={posterUrl} className={style.img} />
            <div className={style.coverCard}>
              <div className={style.infoWrap}>
                <h3>Рейтинг: {ratingKinopoisk}</h3>
                <p>{year}</p>
              </div>
            </div>
          </div>
          <p className={style.cardText}>{nameRu}</p>
        </NavLink>
      </div>
    </>
  );
};
export default CardMovie;
