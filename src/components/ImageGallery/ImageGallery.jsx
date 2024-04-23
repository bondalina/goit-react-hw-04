import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={css.galleryList}>
      {items.map((item) => (
        <li className={css.galleryItem} key={item.id}>
          <ImageCard
            urls={item.urls}
            description={item.description}
            onClick={() => onImageClick(item.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
