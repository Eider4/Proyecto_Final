import React, { useState } from "react";
// import MiniPantalla from "../mini-pantalla/MiniPantalla";
// import CardProduct from "../card-product/CardProduct";
import style from "./ShowProducts.module.css"
import CardProduct from "./card-product/CardProduct";
import MiniPantalla from "./mini-pantalla/MiniPantalla";

export default function ShoeProducts({
  id,
  title,
  price,
  image,
  description,
  category,
}) {
  const [showMiniPantalla, setShowMiniPantalla] = useState(false);

  return (
    <>
      {showMiniPantalla && (
        <MiniPantalla
          id={id}
          title={title}
          price={price}
          image={image}
          description={description}
          category={category}
          setShowMiniPantalla={setShowMiniPantalla}
        />
      )}
      <div
        className={style.div_new}
        onClick={() => {
          setShowMiniPantalla(true);
        }}
      >
        {!showMiniPantalla && (
          <CardProduct
            id={id}
            title={title}
            price={price}
            image={image}
            description={description}
            category={category}
          />
        )}
      </div>
    </>
  );
}
