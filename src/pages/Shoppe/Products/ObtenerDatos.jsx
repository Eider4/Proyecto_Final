// src/Components/ProductsList.js
import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../../../Firebase/credenciales";
import ShoeProducts from "../../../Modules/ShowProducts/ShowProducts";
import { useFetch } from "../../../Hooks/UseFetch";
// import ShoeProducts from "../../ShowProducts/ShowProducts";
// import { useEffect, useState } from "react";

const db = getFirestore(app);
const ProductsList = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const {data:products, loading, error} = useFetch('http://localhost:3000/products')

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div id="containerProducts" className="container-products">
      {products.map((e) => (
        <ShoeProducts key={e.id} {...e} />
      ))}
    </div>
  );
};

export default ProductsList;
