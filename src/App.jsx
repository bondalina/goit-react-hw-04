import { useEffect, useState } from "react";
import { FetchImages } from "./images-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import ReactModal from "react-modal";
// import './App.css'

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImageUrl(null);
    setIsModalOpen(false);
  };
  useEffect(() => {
    ReactModal.setAppElement("#root");
  }, []);
  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        const data = await FetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [page, query]);
  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl={selectedImageUrl}
      />
    </div>
  );
};

export default App;
