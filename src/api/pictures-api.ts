import axios from "axios";

interface Picture {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
};

interface PictureData {
  results: Picture[];
  total_pages: number;
}

export const fetchPictures = async (topic: string, page: number): Promise<PictureData> => {
  const YOUR_ACCESS_KEY = "aJxlQyQ_ncHZVAsZ2c5-mme06gwM21Q2nLe-1ELT0RI";
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
