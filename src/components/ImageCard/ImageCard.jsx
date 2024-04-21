// import css from "./ImageCard.module.css"

const ImageCard = ({ urls, description }) => {
  return (
    <div>
      <img src={urls} alt={description} />
    </div>
  );
};

export default ImageCard;
