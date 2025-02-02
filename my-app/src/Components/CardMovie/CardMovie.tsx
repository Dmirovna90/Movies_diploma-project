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
  nameOriginal,
}: IMovie) => {
  const { cardWrap, link, imgWrap, img, coverCard, infoWrap, cardText } = style;
  return (
    <>
      <div className={cardWrap}>
        <NavLink to={`/${kinopoiskId}`} className={link}>
          <div className={imgWrap}>
            <img alt={coverURL} src={posterUrl} className={img} />
            <div className={coverCard}>
              <div className={infoWrap}>
                <h3>Рейтинг: {ratingKinopoisk}</h3>
                <p>{year}</p>
              </div>
            </div>
          </div>
          {nameRu ? (
            <p className={cardText}>{nameRu}</p>
          ) : (
            <p className={cardText}>{nameOriginal}</p>
          )}
        </NavLink>
      </div>
    </>
  );
};
export default CardMovie;
