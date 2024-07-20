import { useEffect, useState } from "react";
import style from "./CardProduct.module.css";

const CardProduct = ({ id, title, price, image, description }) => {
  const [agregadoacarrito, setagregadoacarrito] = useState("");

  // const funcion = () => {
  //   const CardShopArray = JSON.parse(localStorage.getItem("AddCar"));

  //   const product_filtrado = CardShopArray.find((item) => item.id == id);
  //   if (product_filtrado) {
  //     setagregadoacarrito("🛒");
  //   }
  // };
  // useEffect(() => {
  //   funcion();
  // }, []);

  return (
    <div
      onClick={style.MiniPantallaV}
      className={style.Button_div_new}
      key={id}
    >
      <>
        <img className={style.products_img} src={image} alt={title} />
        <div className={style.container_ifo_product}>
          <h3 className={style.products_title}>
            {/* {agregadoacarrito} */}
            {title}
          </h3>
          <p className={style.products_descripcion}> {description}</p>
        </div>
        <div className={style.div_mascara} />
      </>
    </div>
  );
};

export default CardProduct;
