// import React, { useState } from "react";
import styles from "./MiniPantalla.module.css";
// import ImageCarousel from "./ImageCarousel";
// import CarImg from "../../../assets/carrito-de-compras.png";
// import CarShoppe from "./CarShoope/CarShoppe";
// import ComprarProducto from "./ComprarProducto/ComprarProducto";
// import Imagenes from "../../../assets/Imagenes";


// export default function MiniPantalla({
//   id,
//   title,
//   price,
//   image,
//   description,
//   category,
//   setShowMiniPantalla,
// }) {
//   const [newImg] = useState([image]);
//   const [imageShow, setImageShow] = useState(newImg[0]);
//   const [urlImage, setUrlImage] = useState(image);

//   return (
//     <div id="mini_pantalla" className={styles.mini_pantalla}>
//       <div className={styles.container}>
//         <div className={styles.image_container}>
//           <span
//             onClick={() => setShowMiniPantalla(false)}
//             className={styles.close_button}
//           >
//             &times;
//           </span>
//           <img
//             className={styles.main_image}
//             src={urlImage}
//             onError={() => setUrlImage(Imagenes[id - 1])}
//             alt={title}
//             name={title}
//           />
//           <div className={styles.carousel_container}>
//             <ImageCarousel
//               onClick={(path) => setImageShow(path)}
//               images={newImg}
//               title={title}
//             />
//           </div>
//         </div>
//         <div className={styles.info_container}>
//           <p className={styles.id}>
//             <b>ID: </b>
//             {id}
//           </p>
//           <h3 className={styles.h3title}>{title}</h3>
//           <p className={styles.description}>{description}</p>
//           <p className={styles.category}>
//             <b>Category: </b>
//             {category}
//           </p>
//           <p className={styles.price}>
//             <b>Price: </b>
//             {price}
//           </p>
//           <CarShoppe CarImg={CarImg} id={id} styles={styles} />
//           <ComprarProducto />
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import CarImg from "../../../assets/carrito-de-compras.png";
import CarShoppe from "./CarShoope/CarShoppe";
import ComprarProducto from "./ComprarProducto/ComprarProducto";
import Imagenes from "../../../assets/Imagenes";

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
  const [urlImage, setUrlImage] = useState(image);

  return (
    <div
      id="mini_pantalla"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white animate-fadeIn overflow-hidden"
    >
      <div className="flex flex-row w-[90%] max-w-[1200px] h-[80%] bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col items-center justify-around flex-1 p-2 bg-gray-100 relative">
          <span
            onClick={() => setShowMiniPantalla(false)}
            className="absolute top-2 right-2 text-2xl text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out hover:text-orange-500"
          >
            &times;
          </span>
          <img
            className="h-[70%] object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            src={urlImage}
            onError={() => setUrlImage(Imagenes[id - 1])}
            alt={title}
            name={title}
          />
          <div className="flex flex-row gap-2 mt-2 w-full overflow-x-scroll">
            <ImageCarousel
              onClick={(path) => setImageShow(path)}
              images={newImg}
              title={title}
            />
          </div>
        </div>
        <div className="flex-1 p-5 bg-white text-left overflow-y-auto">
          <p className="text-orange-500 text-lg mb-2">
            <b>ID: </b>{id}
          </p>
          <h3 className="text-cyan-400 text-2xl mb-3">{title}</h3>
          <p className="text-gray-800 text-base mb-3">{description}</p>
          <p className="text-orange-500 text-base mb-2">
            <b>Category: </b>{category}
          </p>
          <p className="text-orange-500 text-base mb-2">
            <b>Price: </b>${price}
          </p>
          <CarShoppe CarImg={CarImg} id={id} styles={styles} />
          <ComprarProducto />
        </div>
      </div>
    </div>
  );
}
