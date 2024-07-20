import { useEffect, useState } from "react";
// import GetProducts from "../GetProducts";
import Button_Search from "./Button_Search";
import style from "./header.module.css";
import { useFetch } from "../../Hooks/UseFetch";

export default function Input_search() {
  const [value, setValue] = useState("");
  // const [products, setProducts] = useState();
  const [products_filtrados, setproducts_filtrados] = useState([]);
  const [ProductsFiltradosActivo, setProductsFiltradosActivo] = useState(true);
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");
  const funcion_onchange = (e) => {
    setValue(e.target.value);
    const products_filtrados = products.filter((item) => {
      return item.title.includes(e.target.value);
    });
    setproducts_filtrados(products_filtrados);
    if (e.target.value == "" || !e.target.value) {
      setProductsFiltradosActivo(false);
    } else {
      setProductsFiltradosActivo(true);
    }
  };
  return (
    <div className={style.div_input_buttons_search}>
      <div>
        <input
          onChange={(e) => funcion_onchange(e)}
          id="search"
          className={style.search}
          type="text"
          value={value}
          placeholder="your product here"
        />

        {ProductsFiltradosActivo && (
          <div className={style.div_search_Buttons}>
            {products_filtrados.map((item) => (
              <Button_Search key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
