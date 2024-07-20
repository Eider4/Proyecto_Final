import React from "react";
import styles from "./MiniPantalla.module.css";

const ImageCarousel = ({ onClick, images, title }) => {
  return (
    <div className={styles.image_carousel}>
      {images.map((path, i) => (
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
