import ShoeHeader from "../../components/ShoeHeader/ShoeHeader";
import { useEffect, useState } from "react";
import ShoeProducts from "../../../components/ShowProducts/ShowProducts";
import GetProductsCategory from "../GetProductsCategory/GetProductsCategory";

function Mens_clothing() {
  const Category = "men's clothing";
  const [Get_category, setGet_category] = useState([]);
  const funcionGetCategory = async () => {
    const Get_category = await GetProductsCategory(Category);
    setGet_category(Get_category);
  };
  useEffect(() => {
    funcionGetCategory();
  }, []);
  return (
    <>
      <ShoeHeader />
      <h1>Mens_clothing</h1>
      <div id="containerProducts" className="container-products">
        {Get_category.map((e) => (
          <ShoeProducts key={e.id} {...e} />
        ))}
      </div>
    </>
  );
}

export default Mens_clothing;
