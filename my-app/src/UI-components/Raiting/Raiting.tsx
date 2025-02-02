import { IMovie } from "../../types/types";
import style from "./Raiting.module.scss";

const Raiting = ({
  ratingKinopoisk,
  ratingKinopoiskVoteCount,
  reviewsCount,
}: IMovie) => {
  const { raitingWrap, rating, ratingVote, reviews } = style;
  return (
    <div className={raitingWrap}>
      <h2 className={rating}>{ratingKinopoisk}</h2>
      <p className={ratingVote}>{ratingKinopoiskVoteCount} оценки</p>
      <p className={reviews}>{reviewsCount} рецензий</p>
    </div>
  );
};
export default Raiting;
