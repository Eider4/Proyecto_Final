import React from "react";
import style from "./CardProduct.module.css";
import CarImg from "../../../assets/carrito-de-compras.png";

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
  return (
    <div
      onClick={() => {
        setShowMiniPantalla(true);
      }}
      className={style.Button_div_new}
      key={id}
    >
      <div className={style.div_img}>
        <img className={style.products_img} src={image} alt={title} />
      </div>
      <div className={style.container_ifo_product}>
        <h3 className={style.products_title}>{title}</h3>
        <p className={style.products_price}>${price.toFixed(2)}</p>
        <p className={style.products_category}>{category}</p>
        <p className={style.products_descripcion}>{description}</p>
        <p className={style.products_rating}>
          Rating: {rating.rate} ({rating.count} reviews)
        </p>
        <>
          <img
            src={CarImg}
            alt="Agragar-Carrito"
            width="40px"
            style={{ backgroundColor: "#0000" }}
          />
        </>
      </div>
      <div className={style.div_mascara} />
    </div>
  );
};

export default CardProduct;
