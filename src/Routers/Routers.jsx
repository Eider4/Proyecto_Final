import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoeHeader from "../Components/ShoeHeader/ShowHeader";
import Shoppe from "../Components/Shoppe";
import Electronics from "../pages/Electronics/Electronics";
import Jewelery from "../pages/jewelery/Jewelery";
import Womens_clothing from "../pages/womens_clothing/womens_clothing";
import Mens_clothing from "../pages/mens-clothing/Mens_clothing";
import Add_Card from "../pages/Add_Card/Add_Card";


export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<> <ShoeHeader />  <Shoppe /></> } />
           <Route path="electronics" element={<Electronics />} />
             <Route path="jewelery" element={<Jewelery />} />
            <Route path="womens-clothing" element={<Womens_clothing />} />
            <Route path="mens-clothing" element={<Mens_clothing />} /> 
            <Route path="Carrito-compras" element={<Add_Card />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

