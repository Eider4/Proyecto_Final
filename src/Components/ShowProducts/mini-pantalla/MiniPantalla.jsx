import React, { useState } from "react";
import styles from "./MiniPantalla.module.css";
import ImageCarousel from "./ImageCarousel";

export default function MiniPantalla({
  id,
  title,
  price,
  image,
  description,
  category,
  setShowMiniPantalla,
}) {
  const [newImg] = useState([image]);
  const [imageShow, setImageShow] = useState(newImg[0]);

  return (
    <div id="mini_pantalla" className={styles.mini_pantalla}>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <span
            onClick={() => setShowMiniPantalla(false)}
            className={styles.close_button}
          >
            &times;
          </span>
          <img
            className={styles.main_image}
            src={imageShow}
            alt={title}
            title={title}
          />
          <div className={styles.carousel_container}>
            <ImageCarousel
              onClick={(path) => setImageShow(path)}
              images={newImg}
              title={title}
            />
          </div>
        </div>
        <div className={styles.info_container}>
          <p className={styles.id}><b>ID: </b>{id}</p>
          <h3 className={styles.h3title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.category}><b>Category: </b>{category}</p>
          <p className={styles.price}><b>Price: </b>{price}</p>
          <button className={styles.button_borrar}>Delete</button>
        </div>
      </div>
    </div>
  );
}
