import { IButton } from '../../types/types'
import style from './ButtonPrevNext.module.scss'
const ButtonPrevNext = ({
  children,
  isDisabled,
  click,
  type,
}: IButton) => {
    return(
        <button
        className={style.button}
        disabled={isDisabled}
        onClick={click}
        type={type}
      >
        {children}
      </button>
    )
}
export default ButtonPrevNext