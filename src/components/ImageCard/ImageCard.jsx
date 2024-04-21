import css from "./ImageCard.module.css";

const ImageCard = ({ urls, description }) => {
  return <img className={css.galleryImg} src={urls.small} alt={description} />;
};

export default ImageCard;
