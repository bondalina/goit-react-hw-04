import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  const handleCloseModal = () => {
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      className={css.modal}
    >
      <img className={css.imageModal} src={imageUrl} alt="" />
    </Modal>
  );
};

export default ImageModal;
