import ShoeHeader from "../../components/ShoeHeader/ShoeHeader";
import ShoeProducts from "../../../components/ShowProducts/ShowProducts";
import { useFetch } from "../../Hooks/UseFetch";

const Electronics = () => {
  const Category = "electronics";
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
          <h1>Electronics</h1>
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

export default Electronics;
