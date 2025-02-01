import { NavLink, useParams } from "react-router-dom";
import { IMovie } from "../../types/types";
import style from "./CardMovies.module.scss";
const CardMovie = ({
  kinopoiskId,
  nameRu,
  posterUrl,
  coverURL,
  year,
  ratingKinopoisk,
  nameOriginal
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
          </div>{
            nameRu ? (<p className={style.cardText}>{nameRu}</p>):(<p className={style.cardText}>{nameOriginal}</p>)
          }
          
        </NavLink>
      </div>
    </>
  );
};
export default CardMovie;
