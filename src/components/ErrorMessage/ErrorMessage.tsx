type Props = {
  txt: string
}

const ErrorMessage = ({ txt }: Props) => {
  return (
    <>
      <h2>{txt}</h2>
    </>
  );
};

export default ErrorMessage;
