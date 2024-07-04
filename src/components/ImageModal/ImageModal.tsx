import Modal from "react-modal";
import style from "./ImageModal.module.css";
Modal.setAppElement("#root");

type Props = {
  src: string | null
  isOpen: boolean
  close: () => void
}

const ImageModal = ({ src, isOpen, close }: Props) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={close} className={style.Modal} overlayClassName={style.Overlay}>
      <img src={src} alt="Image Modal" className={style.imageModal} />
    </Modal>
  );
};

export default ImageModal;
