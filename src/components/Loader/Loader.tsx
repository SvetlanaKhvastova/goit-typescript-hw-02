import { FC } from "react";
import { Vortex } from "react-loader-spinner";
import style from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <>
      <div className={style.loader}>
        <Vortex visible={true} height="80" width="80" ariaLabel="vortex-loading" wrapperStyle={{}} wrapperClass="vortex-wrapper" colors={["red", "green", "blue", "yellow", "orange", "purple"]} />
      </div>
    </>
  );
};

export default Loader;
