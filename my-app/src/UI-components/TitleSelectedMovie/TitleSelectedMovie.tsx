import { IMovie } from "../../types/types";
import style from "./TitleSelectedMovie.module.scss";

const TitleSelectedMovie = ({ nameRu, nameOriginal, description }: IMovie) => {
  const { titleWrap, title, titleOriginal, descriptionMovie } = style;
  return (
    <div className={titleWrap}>
      <h1 className={title}>{nameRu}</h1>
      <p className={titleOriginal}>{nameOriginal}</p>
      <p className={descriptionMovie}>{description}</p>
    </div>
  );
};
export default TitleSelectedMovie;
