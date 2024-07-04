import style from "./LoadMoreBtn.module.css";

type Props = {
  onLoadMore: () => void
}

const LoadMoreBtn = ({ onLoadMore }: Props) => {
  return (
    <>
      <button className={style.load_more_btn} onClick={onLoadMore}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
