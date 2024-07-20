import { useEffect, useState } from "react";
// import GetProducts from "./components/GetProducts";
import { Outlet } from "react-router-dom";
import { useFetch } from "../../Hooks/UseFetch";
// import ShoppeProducts from "./components/shoppe/shoppeProducts";
import videoSrc from "../../assets/tienda_online.mp4";
import Symbol_Category from "./Symbol_Category/Symbol_Category";
import styles from "./ShoppeProducts.module.css";

export default function Shoppe() {
  const { data, loding, error } = useFetch("https://fakestoreapi.com/products");
  useEffect(() => {
    console.log(data);
  }, []);
  // <ShoppeProducts element={data} />
  return (
    <>
      <div className={styles.header_Video}>
        <div className={styles.div_video_background}>
          <video className={styles.video_background} autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={styles.div_category_All}>
        <h1 className={styles.Categories_h1}>Categories</h1>
        <div id="containerProducts" className={styles.container_products}>
          <Symbol_Category />
        </div>
      </div>
    </>
  );
}
