import { useEffect, useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { fetchPictures } from "../../api/pictures-api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

interface Picture {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
};

const App = () => {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>(false);
  const { isOpen, open, close } = useToggle();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoader(true);
        const data = await fetchPictures(query, page);
        setPictures((prevData) => [...prevData, ...data.results]);
        setTotalPage(data.total_pages);
        data.total_pages === 0 && setError("No results found.");
      } catch (error) {
        setError("Whoops, something went wrong! Please try reloading this page later!");
      } finally {
        setLoader(false);
      }
    };
    query && fetchData();
  }, [query, page]);

  useEffect(() => {
    if (page !== 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [pictures, page]);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    setPictures([]);
    setPage(1);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    open();
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <ImageModal src={selectedImage} isOpen={isOpen} close={close} />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage txt={error as string} />}
      {pictures?.length > 0 && <ImageGallery gallery={pictures} openRegularImg={handleImageClick} />}
      {loader && <Loader />}
      {pictures?.length > 0 && page < totalPage && <LoadMoreBtn onLoadMore={handleLoadMore} />}
    </>
  );
};

export default App;
