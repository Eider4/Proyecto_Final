import React, { useState } from "react";
import style from "./CardProducts/CardProduct.module.css";
// import CardProduct from "./card-product/CardProduct";
import MiniPantalla from "./mini-pantalla/MiniPantalla";
import CardProduct from "./CardProducts/CardProduct";

export default function ShoeProducts({
  id,
  nombre,
  precio,
  imagen,
  descripcion,
  categoria,
  rating,
}) {
  const [showMiniPantalla, setShowMiniPantalla] = useState(false);

  return (
    <>
      {showMiniPantalla && (
        <MiniPantalla
          id={id}
          title={nombre}
          price={precio}
          image={imagen}
          description={descripcion}
          category={categoria}
          rating={rating}
          setShowMiniPantalla={setShowMiniPantalla}
        />
      )}
      <div
        className={style.div_new}
        
      >
        {!showMiniPantalla && (
          <CardProduct
            id={id}
            title={nombre}
            price={precio}
            image={imagen}
            description={descripcion}
            category={categoria}
            rating={rating}
            setShowMiniPantalla={setShowMiniPantalla}
          />
        )}
      </div>
    </>
  );
}
