import ShoeHeader from "../../Components/ShoeHeader/ShowHeader";
import ShoeProducts from "../../Components/ShowProducts/ShowProducts";
import { useFetch } from "../../Hooks/UseFetch";


function Mens_clothing() {
  const Category = "men's clothing";
  const {
    data: products,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/category/${Category}`);
  return (
    <>
      {error && <p>ERROR: {error}</p>}
      {loading && <p>Cargando...</p>}
      <ShoeHeader />
      {products && (
        <>
          <h1>Men's clothing</h1>
          <div id="containerProducts" className="container-products">
            {products.map((e) => (
              <ShoeProducts key={e.id} {...e} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Mens_clothing;
