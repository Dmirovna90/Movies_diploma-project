import { IMovie } from "../../types/types";
import style from "./Raiting.module.scss";

const Raiting = ({ ratingKinopoisk, ratingKinopoiskVoteCount, reviewsCount }: IMovie) => {
  return (
    <div className={style.raitingWrap}>
      <h2 className={style.ratingKinopoisk}>{ratingKinopoisk}</h2>
      <p className={style.ratingKinopoiskVoteCount}>{ratingKinopoiskVoteCount} оценки</p>
      <p className={style.reviewsCount}>{reviewsCount} рецензий</p>
    </div>
  );
};
export default Raiting;