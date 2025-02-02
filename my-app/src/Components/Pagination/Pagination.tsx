import { useDispatch } from "react-redux";
import { IStore } from "../../types/types";
import style from "./Pagination.module.scss";
import { ReactComponent as Prev } from "../../assets/prev.svg";
import { ReactComponent as Next } from "../../assets/next.svg";
import { ReactComponent as First } from "../../assets/first.svg";
import { ReactComponent as Last } from "../../assets/last.svg";
import ButtonPrevNext from "../../UI-components/ButtonPrevNext/ButtonPrevNext";
import { AppDispatch } from "../../store";

const Pagination = ({ currentPage, totalItems, setPage }: IStore) => {
  const dispatch = useDispatch<AppDispatch>();
  const totalPage = Math.ceil(totalItems / 20);
  const { page, pageCurrent, prevNextWrap, icons, icon, pageNumbers } = style;
  const renderPageNumber = () => {
    const pageNumber = [];
    const maxPageNumber = 10;
    const startPage = Math.max(currentPage - Math.floor(maxPageNumber / 2), 1);
    const endPage = Math.min(startPage + maxPageNumber - 1, totalPage);
    for (let i = startPage; i <= endPage; i++) {
      pageNumber.push(
        <button
          className={i === currentPage ? pageCurrent : page}
          key={i}
          onClick={() => handlerPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumber;
  };
  const handlerPageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
  };
  const handlerPrev = () => {
    if (currentPage > 1) dispatch(setPage(currentPage - 1));
  };
  const handlerNext = () => {
    if (currentPage < totalPage) dispatch(setPage(currentPage + 1));
  };
  const handlerFirst = () => dispatch(setPage((currentPage = 1)));
  const handlerLast = () => dispatch(setPage((currentPage = totalPage)));
  return (
    <div className={prevNextWrap}>
      <div className={icons}>
        <ButtonPrevNext
          type="button"
          click={handlerFirst}
          isDisabled={currentPage === 1}
        >
          <First className={icon} />
        </ButtonPrevNext>
        <ButtonPrevNext
          type="button"
          click={handlerPrev}
          isDisabled={currentPage === 1}
        >
          <Prev className={icon} />
        </ButtonPrevNext>
      </div>
      <div className={pageNumbers}>{renderPageNumber()}</div>
      <div className={icons}>
        <ButtonPrevNext
          click={handlerNext}
          isDisabled={currentPage === totalPage}
          type="button"
        >
          <Next className={icon} />
        </ButtonPrevNext>
        <ButtonPrevNext
          isDisabled={currentPage === totalPage}
          type="button"
          click={handlerLast}
        >
          <Last className={icon} />
        </ButtonPrevNext>
      </div>
    </div>
  );
};
export default Pagination;
