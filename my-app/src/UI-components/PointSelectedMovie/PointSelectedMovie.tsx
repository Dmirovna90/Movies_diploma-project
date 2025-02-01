import { IPoint } from '../../types/types'
import style from './PointSelectedMovie.module.scss'
const PointSelectedMovie = ({topic, point}:IPoint) => {
return (
    <div className = {style.pointWrap}>
        <div className = {style.pointTopic}>{topic}</div>
        <div className = {style.point}>{point}</div>
    </div>
)
}
export default PointSelectedMovie