import style from "./ImageModal.module.css";

const ImageModal = ({ src }) => {
  return (
    <>
      <img src={src} alt="Image Modal" className={style.imageModal} />
    </>
  );
};

export default ImageModal;
