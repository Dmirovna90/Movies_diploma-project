import { IMovie } from "../../types/types";
import style from "./TitleSelectedMovie.module.scss";

const TitleSelectedMovie = ({ nameRu, nameOriginal, description }: IMovie) => {
  return (
    <div className={style.titleWrap}>
      <h1 className={style.title}>{nameRu}</h1>
      <p className={style.titleOriginal}>{nameOriginal}</p>
      <p className={style.description}>{description}</p>
    </div>
  );
};
export default TitleSelectedMovie;
