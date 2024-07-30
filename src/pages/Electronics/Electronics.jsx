// import ShoeProducts from "../../../components/ShowProducts/ShowProducts";
import ShoeHeader from "../../Components/ShoeHeader/ShowHeader";
import ShoeProducts from "../../Components/ShowProducts/ShowProducts";
import { useFetch } from "../../Hooks/UseFetch";

const Electronics = () => {
  const Category = "electronics";
  const {
    data: products,
    loading,
    error,
  } = useFetch(`http://localhost:3001/electronics`);
  return (
    <>
      {error && <p>ERROR: {error}</p>}
      {loading && <p>Cargando...</p>}
      <ShoeHeader category={Category}/>
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

export default Electronics;
