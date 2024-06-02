import axios from "axios";

export const fetchPictures = async (topic, page) => {
  const YOUR_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_APP_ACCESS_KEY;
  const baseURL = "https://api.unsplash.com/search/photos/";
  const params = {
    query: topic,
    per_page: 8,
    page: page,
    orientation: "landscape",
    client_id: YOUR_ACCESS_KEY,
  };
  const { data } = await axios.get(baseURL, { params });
  return data;
};
