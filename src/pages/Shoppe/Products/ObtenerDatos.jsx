// src/Components/ProductsList.js
import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../../../Firebase/credenciales";
import ShoeProducts from "../../../Modules/ShowProducts/ShowProducts";
// import ShoeProducts from "../../ShowProducts/ShowProducts";
// import { useEffect, useState } from "react";

const db = getFirestore(app);
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const colRef = collection(db, "products"); // Nombre de la colección
        const snapshot = await getDocs(colRef);
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (err) {
        setError("Error al obtener los datos.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
