type Props = {
  src: {
    small: string;
    regular: string;
  };
  description: string;
  openRegularImg: (image: string) => void;
};

const ImageCard = ({ src, description, openRegularImg }: Props) => {
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
