import { useEffect, useState } from "react";
import { FetchImages } from "./images-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import './App.css'

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

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
      {error && <b>Oooops!</b>}
      {images.length > 0 && <ImageGallery items={images} />}
      {isLoading && <p>Please wait.......</p>}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default App;
