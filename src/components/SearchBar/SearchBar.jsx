import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";

const SearchBar = ({ onSearch }) => {
  const [topic, setTopic] = useState("");
  const formRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (topic === "") {
      toast.error("Please enter a topic to search for images.");
      return;
    }
    onSearch(topic);
    formRef.current.reset();
    setTopic("");
  };

  return (
    <>
      <header className={style.search_bar}>
        <form className={style.search_form} ref={formRef} onSubmit={handleSubmit}>
          <input type="text" autoComplete="off" name="topic" autoFocus placeholder="Search images and photos" value={topic} onChange={(e) => setTopic(e.target.value)} />
          <button type="submit">
            <FcSearch />
            Search
          </button>
        </form>
      </header>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default SearchBar;
