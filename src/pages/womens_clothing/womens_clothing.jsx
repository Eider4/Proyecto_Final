import ShoeHeader from "../../Modules/ShoeHeader/ShowHeader";
import ShoeProducts from "../../Modules/ShowProducts/ShowProducts";
import { useFetch } from "../../Hooks/UseFetch";

function Womens_clothing() {
  const Category = "women's clothing";
  const {
    data: products,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/category/${Category}`);
  return (
    <>
      {error && <p>ERROR: {error}</p>}
      {loading && <p>Cargando...</p>}
      <ShoeHeader category={Category} />
      {products && (
        <>
          <div id="containerProducts" className="container-products">
            {products.map((e) => (
              <ShoeProducts key={e.id} {...e}  />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Womens_clothing;
