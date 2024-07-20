import React, { useEffect, useState } from "react";
import electronics from "../../../assets/categories_Symbol/electrodomésticos_domésticos.jpg";
import jewellery from "../../../assets/categories_Symbol/fashion-jewelry.webp";
import womens_clothing from "../../../assets/categories_Symbol/womens-clothing.webp";
import mens_clothing from "../../../assets/categories_Symbol/mens_clothing.jpg";
import style from "./Symbol_Category.module.css";
import { Outlet, Link } from "react-router-dom";

const Catgorys = [
  { title: "electronics", router: "/electronics", img: electronics },
  { title: "jewelery", router: "/jewelery", img: jewellery },
  { title: "Mens clothing", router: "/mens-clothing", img: mens_clothing },
  {
    title: "Womens clothing",
    router: "/womens-clothing",
    img: womens_clothing,
  },
];
  function Symbol_Category() {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    setCategory(Catgorys);
  }, []);
  return (
    <>
      {Category.map((e) => (
        <div className={style.div_imagenes_categoy} key={e.title}>
          <Link className="link" to={e.router}>
              <img className={style.imagenes} src={e.img} alt={e.title} />
              <h4 className={style.div_imagenes_category}>{e.title}</h4>
          </Link>
        </div>
      ))}
      <Outlet />
    </>
  );
}

export default Symbol_Category;
