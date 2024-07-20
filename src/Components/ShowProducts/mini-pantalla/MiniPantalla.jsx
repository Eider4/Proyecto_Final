// import React, { useEffect, useState } from "react";
// import styles from "./MiniPantalla.module.css";
// import ImageCarousel from "./ImageCarousel";

// export default function MiniPantalla({
//   id,
//   title,
//   price,
//   image,
//   description,
//   category,
//   setShowMiniPantalla,
// }) {
//   const [newImg, setnewImg] = useState([image]);
//   const [imageShow, setImageShow] = useState(newImg[0]);

//   return (
//     <div id="mini_pantalla" className={styles.mini_pantalla}>
//       <div className={styles.informacion}>
//         <span onClick={() => setShowMiniPantalla(false)}>X</span>
//         <div className={styles.div_title}>
//           <h3 className={styles.h3title}>
//             {/* <span>{agregadoacarrito}</span> */}
//             {title}
//           </h3>
//         </div>
//         <div className={styles.div_description}>
//           <div className={styles.div_desvanecido}>
//             <p className={styles.description}>{description}</p>
//           </div>
//         </div>
//         <p className={styles.Category}>
//           <b>Category: </b>
//           {category}
//         </p>
//         <p>
//           <b>Price: </b>
//           {price}
//         </p>
//         <button className={styles.button_borrar}>
//           <p>Borrar</p>
//         </button>
//       </div>
//       <img
//         className={styles.mini_pantall}
//         src={imageShow}
//         alt={title}
//         title={title}
//       />
//       <div className={styles.div_imagenes_pequeñas}>
//         <ImageCarousel
//           onClick={(path) => setImageShow(path)}
//           images={newImg}
//           title={title}
//         />
//       </div>
//     </div>
//   );
// }
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
  const [newImg, setNewImg] = useState([image]); // Inicializa con la imagen principal
  const [imageShow, setImageShow] = useState(image);

  return (
    <div className={styles.mini_pantalla}>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <img
            className={styles.main_image}
            src={imageShow}
            alt={title}
            title={title}
          />
          <button className={styles.button_borrar} onClick={() => setShowMiniPantalla(false)}>
            Borrar
          </button>
        </div>
        <div className={styles.info_container}>
          <h3 className={styles.h3title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.Category}>
            <b>Category: </b>{category}
          </p>
          <p>
            <b>Price: </b>{price}
          </p>
          <div className={styles.div_imagenes_pequeñas}>
            <ImageCarousel
              onClick={(path) => setImageShow(path)}
              images={newImg}
              title={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
