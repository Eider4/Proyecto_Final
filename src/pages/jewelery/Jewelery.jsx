import ShoeHeader from "../../Modules/ShoeHeader/ShowHeader";
import ShoeProducts from "../../Modules/ShowProducts/ShowProducts";
import { useFetch } from "../../Hooks/UseFetch";
import { useEffect, useState } from "react";

const Jewelery = () => {
  const Category = "jewelery";

  const { data, loading, error } = useFetch(`http://localhost:2323/1`);
  const [products, setproducts] = useState([]);
  useEffect(() => {
    setproducts(data.jewelery); 
  }, [data]);

  console.log(products);

  return (
    <>
      {error && <p>ERROR: {error}</p>}
      {loading && <p>Cargando...</p>}
      <ShoeHeader category={Category} />
      {products && (
        <>
          <div id="containerProducts" className="container-products">
            {products.map((e) => (
              <ShoeProducts key={e.id} {...e} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Jewelery;
