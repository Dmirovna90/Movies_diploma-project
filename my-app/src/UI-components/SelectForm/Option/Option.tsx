import { IOrdering } from "../../../types/types"
import style from './Option.module.scss'
const Option = ({ value, children, disabled}:IOrdering) => {
 return(
     <option value = {value} className = {style.option} disabled = {disabled}>{children}</option>
 ) 

}
export default Option