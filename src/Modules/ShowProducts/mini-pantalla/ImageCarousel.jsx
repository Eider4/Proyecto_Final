import React from "react";
import styles from "./MiniPantalla.module.css";
import disco_duro from "./disco_duro/id_1";

const ImageCarousel = ({ onClick, images, title }) => {
  return (
    <div className={styles.carousel_container}>
      {disco_duro.map((path, i) => (
        <img
          id={`num${i}`}
          onClick={() => onClick(path)}
          key={i}
          className={styles.mini_img}
          src={path}
          title={title}
          alt={title}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
