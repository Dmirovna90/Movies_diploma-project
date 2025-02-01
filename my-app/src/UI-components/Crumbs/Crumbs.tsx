import { useNavigate } from "react-router-dom";
import style from "./Crumbs.module.scss";
const Crumbs = () => {
    const navigate = useNavigate();
  return (
    <div className={style.crumbs}>
      <button className={style.btnHome} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
};
export default Crumbs