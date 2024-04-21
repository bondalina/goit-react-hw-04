import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    outline: "none",
    borderRadius: "0",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      className={css.modal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img className={css.imageModal} src={imageUrl} alt="" />
    </Modal>
  );
};

export default ImageModal;
