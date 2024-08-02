// import React, { useState } from "react";
// import style from "./CardProduct.module.css";
// import CarImg from "../../../assets/carrito-de-compras.png";
// import Imagenes from "../../../assets/Imagenes";

// const CardProduct = ({
//   id,
//   title,
//   price,
//   image,
//   description,
//   category,
//   rating,
//   setShowMiniPantalla,
// }) => {
//   const [urlImage, setUrlImage] = useState(image);
//   return (
//     <div
//       onClick={() => {
//         setShowMiniPantalla(true);
//       }}
//       className={style.Button_div_new}
//       key={id}
//     >
//       <div className={style.div_img}>
//         <img
//           className={style.products_img}
//           src={urlImage}
//           onError={() => setUrlImage(Imagenes[id - 1])}
//           alt={title}
//         />
//       </div>
//       <div className={style.container_ifo_product}>
//         <h3 className={style.products_title}>{title}</h3>
//         <p className={style.products_price}>${price.toFixed(2)}</p>
//         <p className={style.products_category}>{category}</p>
//         <p className={style.products_descripcion}>{description}</p>
//         <p className={style.products_rating}>
//           rating: {rating} ({rating} reviews)
//         </p>
//       </div>
//       <div className={style.div_mascara} />
//     </div>
//   );
// };

// export default CardProduct;
import React, { useState } from "react";
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
      onClick={() => setShowMiniPantalla(true)}
      key={id}
      className="flex flex-row bg-white p-2 my-2 mx-auto rounded-lg shadow-lg w-[80vw] max-w-[700px] h-[200px] overflow-hidden relative transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl cursor-pointer justify-between"
    >
      <div className="h-full w-[30%]">
        <img
          className="h-auto w-auto max-h-full max-w-full object-cover"
          src={urlImage}
          onError={() => setUrlImage(Imagenes[id - 1])}
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-center w-[70%] bg-[#34495e] p-2 rounded-lg relative overflow-hidden">
        <h3 className="text-sm text-white mb-1.5 line-clamp-3 max-h-[3em] leading-[1.5em] overflow-hidden text-ellipsis">
          {title}
        </h3>
        <p className="text-xs text-[#00bcd4] my-1.5">${price.toFixed(2)}</p>
        <p className="text-[10px] text-[#ecf0f1] my-1.5">{category}</p>
        <p className="relative text-xs text-[#ecf0f1] m-0 whitespace-nowrap overflow-hidden h-[1.5em] hover:animate-scroll-text">
          {description}
        </p>
        <p className="text-[10px] text-[#f1c40f] mt-1.5">
          rating: {rating} ({rating} reviews)
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-60" />
    </div>
  );
};

export default CardProduct;
