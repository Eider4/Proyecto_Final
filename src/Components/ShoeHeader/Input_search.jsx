import { useState, useEffect } from "react";
import Button_Search from "./Button_Search";
import style from "./header.module.css";
import { useFetch } from "../../Hooks/UseFetch";

export default function Input_search() {
  const [value, setValue] = useState("");
  const [productsFiltrados, setProductsFiltrados] = useState([]);
  const [productsFiltradosActivo, setProductsFiltradosActivo] = useState(false);
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");

  // Actualiza los productos filtrados cuando se recibe la lista de productos
  useEffect(() => {
    if (products) {
      const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setProductsFiltrados(filteredProducts);
      setProductsFiltradosActivo(value.length > 0);
    }
  }, [value, products]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products.</p>;

  return (
    <div className={style.div_input_buttons_search}>
      <input
        onChange={handleChange}
        id="search"
        className={style.search}
        type="text"
        value={value}
        placeholder="Search for a product..."
      />
      {productsFiltradosActivo && (
        <div className={style.div_search_Buttons}>
          {productsFiltrados.map((item) => (
            <Button_Search key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
