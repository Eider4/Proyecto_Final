import { useEffect, useState } from "react";
import GetProducts from "./components/GetProducts";
import { Outlet } from "react-router-dom";
// import ShoppeProducts from "./components/shoppe/shoppeProducts";

export default function Shoppe() {
  const [Product, setProduct] = useState([]);

  const Products = async () => {
    const newProducts = await GetProducts();
    setProduct(newProducts);
  };
  useEffect(() => {
    Products();
  }, []);

  return (
    <>
      {/* <ShoppeProducts element={Product} /> */}
      
      <Outlet />
    </>
  );
}
