import { useNavigate } from "react-router-dom";
import style from "./Crumbs.module.scss";
const Crumbs = () => {
  const { crumbs, btnHome } = style;
  const navigate = useNavigate();
  return (
    <div className={crumbs}>
      <button className={btnHome} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
};
export default Crumbs;
