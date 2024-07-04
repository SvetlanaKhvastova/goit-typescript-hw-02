import { FormEvent, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";

type Props = {
  onSearch: (topic: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [topic, setTopic] = useState<string>("");

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (topic.trim() === "") {
      toast.error("Please enter a topic to search for images.");
      return;
    }
    onSearch(topic.trim());
    setTopic("");
  };

  return (
    <>
      <header className={style.search_bar}>
        <form className={style.search_form} onSubmit={handleSubmit}>
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
