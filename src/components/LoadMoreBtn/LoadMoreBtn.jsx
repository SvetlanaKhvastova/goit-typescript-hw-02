import style from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <>
      <button className={style.load_more_btn} onClick={onLoadMore}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
