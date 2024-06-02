import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, openRegularImg }) => {
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
