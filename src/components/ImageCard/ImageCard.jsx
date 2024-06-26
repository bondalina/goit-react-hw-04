import css from "./ImageCard.module.css";

const ImageCard = ({ urls, description, onClick }) => {
  const handleClick = () => {
    onClick(urls.regular);
  };

  return (
    <div className={css.imageThumb}>
      <img
        className={css.galleryImg}
        src={urls.small}
        alt={description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
