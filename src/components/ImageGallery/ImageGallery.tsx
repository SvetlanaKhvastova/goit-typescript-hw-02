import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

type ImageItem = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
};

type Props = {
  gallery: ImageItem[];
  openRegularImg: (image: string) => void;
};

const ImageGallery = ({ gallery, openRegularImg }: Props) => {
  return (
    <>
      <ul className={style.image_gallery}>
        {gallery.map((item) => {
          const { id, alt_description, urls } = item;
          return (
            <li key={id}>
              <ImageCard description={alt_description} src={urls} openRegularImg={openRegularImg} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
