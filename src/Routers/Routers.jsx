import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shoppe from "./Shoppe";
import ShoeHeader from "./components/ShoeHeader/ShoeHeader";
// import Electronics from "./pages/Categories/Electronics/Electronics";
// import Jewelery from "./pages/Categories/jewelery/Jewelery";
// import Mens_clothing from "./pages/Categories/mens-clothing/Mens_clothing";
// import Womens_clothing from "./pages/Categories/womens_clothing/womens_clothing";
// import Button_Add_Card from "./pages/Button_Add_Card/Button_Add_Card";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<> <ShoeHeader /> <Shoppe /> </> } />
            {/* <Route path="electronics" element={<Electronics />} />
            <Route path="jewelery" element={<Jewelery />} />
            <Route path="Carrito-compras" element={<Button_Add_Card />} />
            <Route path="womens-clothing" element={<Womens_clothing />} />
            <Route path="mens-clothing" element={<Mens_clothing />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

