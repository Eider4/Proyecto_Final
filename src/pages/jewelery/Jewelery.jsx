import { useEffect, useState } from "react";
import ShoeHeader from "../../components/ShoeHeader/ShoeHeader";
import GetProductsCategory from "../GetProductsCategory/GetProductsCategory";
import ShoeProducts from "../../../components/ShowProducts/ShowProducts";

const Jewelery = () => {
  const Category = "jewelery";
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
      <h1>jewelery </h1>
      <div id="containerProducts" className="container-products">
        {Get_category.map((e) => (
          <ShoeProducts key={e.id} {...e} />
        ))}
      </div>
    </>
  );
};

export default Jewelery;
