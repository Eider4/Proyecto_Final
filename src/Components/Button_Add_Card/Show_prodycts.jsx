import React, { useState } from "react";
import MiniPantalla from "../mini-pantalla/MiniPantalla";
import CardProduct from "../card-product/CardProduct";
import style from "./ShowProducts.module.css";

export default function Show_prodycts({
  id,
  title,
  price,
  image,
  description,
  category,
}) {
  return (
    <>
      (
      <CardProduct
        id={id}
        title={title}
        price={price}
        image={image}
        description={description}
        category={category}
      />
      )
    </>
  );
}
