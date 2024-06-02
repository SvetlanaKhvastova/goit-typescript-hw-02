import { useEffect, useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { fetchPictures } from "../../api/pictures-api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Modal from "react-modal";
import style from "./App.module.css";

Modal.setAppElement("#root");

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
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

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setPictures([]);
    setPage(1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    open();
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={close} className={style.Modal} overlayClassName={style.Overlay}>
        <ImageModal src={selectedImage} />
      </Modal>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage txt={error} />}
      {pictures?.length > 0 && <ImageGallery gallery={pictures} openRegularImg={handleImageClick} />}
      {loader && <Loader />}
      {pictures?.length > 0 && page < totalPage && <LoadMoreBtn onLoadMore={handleLoadMore} />}
    </>
  );
};

export default App;
