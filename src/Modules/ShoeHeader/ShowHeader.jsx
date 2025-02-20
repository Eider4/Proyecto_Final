import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import style from "./header.module.css";
import Input_search from "./Input_search";
import Login from "./Login/Login";

export default function ShoeHeader({ category }) {
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const cardShopArray = JSON.parse(localStorage.getItem("AddCar")) || [];
  const [usuario1, setUsuario] = useState("");

  return (
    <>
      <header id="header" className={style.header}>
        <div className={style.inf_header}>
          <button
            className={style.menu_toggle}
            onClick={() => setMenuHamburguesa(!menuHamburguesa)}
            aria-label="Toggle Menu"
          >
            {menuHamburguesa ? "✕" : "☰"}
          </button>
          <h1>{category}</h1>
        </div>
        <Input_search />
        <Login />
      </header>
      <div
        className={`${style.navegacion_botones_category} ${
          menuHamburguesa ? style.show : ""
        }`}
      >
        <button
          className="close_menu"
          onClick={() => setMenuHamburguesa(false)}
          aria-label="Close Menu"
        >
          ✕
        </button>
        <Link className={style.link} to="/electronics">
          <button className={style.botones_category}>electronics</button>
        </Link>
        <Link className={style.link} to="/jewelery">
          <button className={style.botones_category}>jewelery</button>
        </Link>
        <Link className={style.link} to="/womens-clothing">
          <button className={style.botones_category}>women's clothing</button>
        </Link>
        <Link className={style.link} to="/mens-clothing">
          <button className={style.botones_category}>men's clothing</button>
        </Link>
        <Link className={style.link} to="/">
          <button className={style.botones_category}>
            Todos los Productos
          </button>
        </Link>
        <Link className={style.link} to="/Carrito-compras">
          <button className={style.botones_category}>Car Shoppe</button>

          <div className={style.cantidad_products_car}>
            {cardShopArray.length}
          </div>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
