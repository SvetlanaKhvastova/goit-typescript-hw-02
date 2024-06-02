const ImageCard = ({ src, description, openRegularImg }) => {
  const { small, regular } = src;

  return (
    <>
      <div>
        <img
          src={small}
          alt={description}
          onClick={() => {
            openRegularImg(regular);
          }}
        />
      </div>
    </>
  );
};

export default ImageCard;
