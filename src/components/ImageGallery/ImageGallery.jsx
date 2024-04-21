import ImageCard from "../ImageCard/ImageCard";
// import css from './ImageGallery.module.css'

const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div>
            <ImageCard urls={item.urls} description={item.description} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
