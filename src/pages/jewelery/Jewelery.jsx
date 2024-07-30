import ShoeHeader from "../../Modules/ShoeHeader/ShowHeader";
import ShoeProducts from "../../Modules/ShowProducts/ShowProducts";
import { useFetch } from "../../Hooks/UseFetch";

const Jewelery = () => {
  const Category = "jewelery";
  const {
    data: products,
    loading,
    error,
  } = useFetch(`http://localhost:3002/jewelery`);
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
