import { useState } from "react";
import MostrarFormularioInscripcion from "../MostrarFormulario/MostrarFormularioInscripcion";
import { Outlet, Link } from "react-router-dom";
import style from "./header.module.css";
import Input_search from "./Input_search";
import Login from "../../pages/Login/Login";

export default function ShoeHeader() {
  const [menuHamburguesa, setmenuHamburguesa] = useState(false);
  const CardShopArray = JSON.parse(localStorage.getItem("AddCar"));
  const [usuario1, setUsuario] = useState("");

  return (
    <>
      <header id="header" className={style.header}>
        <nav className={style.navegacion_header}>
          {!menuHamburguesa && (
            <button onClick={() => setmenuHamburguesa(true)}>
              &#9776;&#xFE0E;
            </button>
          )}

          {/* <p onClick={() => console.log(usuario1)}>hola:{usuario1.email}</p> */}

          {menuHamburguesa && (
            <div className={style.navegacion_botones_category}>
              <button onClick={() => setmenuHamburguesa(false)}>
                &#x2716;&#xFE0E;
              </button>
              <Link className="link" to="/Carrito-compras">
                <button className={style.botones_category}>
                  Car Shoppe{" "}
                  <div className={style.cantidad_products_car}>
                    {CardShopArray.length}
                  </div>
                </button>
              </Link>
              <Link className="link" to="/electronics">
                <button className={style.botones_category}>electronics</button>
              </Link>
              <Link className="link" to="/jewelery">
                <button className={style.botones_category}>jewelery</button>
              </Link>
              <Link className="link" to="/womens-clothing">
                <button className={style.botones_category}>
                  women's clothing
                </button>
              </Link>
              <Link className="link" to="/mens-clothing">
                <button className={style.botones_category}>
                  men's clothing
                </button>
              </Link>
              <Link className="link" to="/">
                <button className={style.botones_category}>
                  Todos los Productos
                </button>
              </Link>
            </div>
          )}
        </nav>
        <Input_search clase={style.search} />
        <Login usuario1={usuario1} setUsuario={setUsuario} />
      </header>
      <Outlet />
    </>
  );
}
