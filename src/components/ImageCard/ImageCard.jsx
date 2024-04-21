// import css from "./ImageCard.module.css"

const ImageCard = ({ urls, description }) => {
  return (
    <div>
      <img src={urls.regular} alt={description} />
    </div>
  );
};

export default ImageCard;
