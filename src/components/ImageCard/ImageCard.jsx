import css from "./ImageCard.module.css";

const ImageCard = ({ urls, description }) => {
  return (
    <div className={css.imageThumb}>
      <img className={css.galleryImg} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
