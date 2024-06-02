import Modal from "react-modal";
import style from "./ImageModal.module.css";
Modal.setAppElement("#root");

const ImageModal = ({ src, isOpen, close }) => {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={close} className={style.Modal} overlayClassName={style.Overlay}>
        <img src={src} alt="Image Modal" className={style.imageModal} />
      </Modal>
    </>
  );
};

export default ImageModal;
