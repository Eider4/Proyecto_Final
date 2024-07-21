import React from "react";
import style from "./CardProduct.module.css";

const CardProduct = ({ id, title, price, image, description, category, rating }) => {
  return (
    <div className={style.Button_div_new} key={id}>
      <img className={style.products_img} src={image} alt={title} />
      <div className={style.container_ifo_product}>
        <h3 className={style.products_title}>{title}</h3>
        <p className={style.products_price}>${price.toFixed(2)}</p>
        <p className={style.products_category}>{category}</p>
        <p className={style.products_descripcion}>{description}</p>
        <p className={style.products_rating}>Rating: {rating.rate} ({rating.count} reviews)</p>
      </div>
      <div className={style.div_mascara} />
    </div>
  );
};

export default CardProduct;
