import React, { useState } from "react";
import style from "./CardProduct.module.css";
import CarImg from "../../../assets/carrito-de-compras.png";
import Imagenes from "../../../assets/Imagenes";

const CardProduct = ({
  id,
  title,
  price,
  image,
  description,
  category,
  rating,
  setShowMiniPantalla,
}) => {
  const [urlImage, setUrlImage] = useState(image);
  return (
    <div
      onClick={() => {
        setShowMiniPantalla(true);
      }}
      className={style.Button_div_new}
      key={id}
    >
      <div className={style.div_img}>
        <img
          className={style.products_img}
          src={urlImage}
          onError={() => setUrlImage(Imagenes[id - 1])}
          alt={title}
        />
      </div>
      <div className={style.container_ifo_product}>
        <h3 className={style.products_title}>{title}</h3>
        <p className={style.products_price}>${price.toFixed(2)}</p>
        <p className={style.products_category}>{category}</p>
        <p className={style.products_descripcion}>{description}</p>
        <p className={style.products_rating}>
          rating: {rating} ({rating} reviews)
        </p>
      </div>
      <div className={style.div_mascara} />
    </div>
  );
};

export default CardProduct;
