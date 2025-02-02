import { IPoint } from "../../types/types";
import style from "./PointSelectedMovie.module.scss";
const PointSelectedMovie = ({ topic, point }: IPoint) => {
  const { pointWrap, pointTopic, pointI } = style;
  return (
    <div className={pointWrap}>
      <div className={pointTopic}>{topic}</div>
      <div className={pointI}>{point}</div>
    </div>
  );
};
export default PointSelectedMovie;
