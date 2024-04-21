import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={css.galleryList}>
      {items.map((item) => (
        <li
          className={css.galleryItem}
          key={item.id}
          onClick={() => onImageClick(item.urls.regular)}
        >
          <ImageCard urls={item.urls} description={item.description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
