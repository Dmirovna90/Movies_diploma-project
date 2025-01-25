import { NavLink } from "react-router-dom";
import { IMovie } from "../../types/types";
import style from "./CardMovies.module.scss";
const CardMovie = ({ kinopoiskId, nameRu, posterUrl }: IMovie) => {
  return (
    <>
      <div className={style.cardWrap}>
        <NavLink to={`/${kinopoiskId}`} className = {style.link}>
          <div className={style.imgWrap}>
            <img src={posterUrl} className={style.img} />
          </div>
          <p className={style.cardText}>{nameRu}</p>
        </NavLink>
      </div>
    </>
  );
};
export default CardMovie;
