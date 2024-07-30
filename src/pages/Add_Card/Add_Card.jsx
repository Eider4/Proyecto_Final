import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app, auth } from "../../Firebase/credenciales";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ShoeProducts from "../../Modules/ShowProducts/ShowProducts";
import { useFetch } from "../../Hooks/UseFetch";
import styles from "./Add_Card.module.css";

const basedatos = getFirestore(app);

export default function Add_Card() {
  const [user, setUser] = useState(null);
  const [ProductsAgregados, setProductsAgregados] = useState([]);
  const [ProductosFiltrados, setProductosFiltrados] = useState([]);
  const {
    data: products,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products`);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        setUser(usuario);
        await cargarPerfil(usuario);
        console.log(`Usuario registrado: ${usuario.email}`);
      } else {
        console.log("No hay usuario registrado");
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (products.length > 0 && ProductsAgregados.length > 0) {
      ProductsF();
    }
  }, [products, ProductsAgregados]);

  const ProductsF = () => {
    const p = products.filter((e) => ProductsAgregados.includes(e.id));
    setProductosFiltrados(p);
  };

  const cargarPerfil = async (usuario) => {
    const coleccion = doc(basedatos, "usuarios", usuario.uid);
    const documento = await getDoc(coleccion);
    const data = documento.data();
    if (data && data.carritoCompras) {
      setProductsAgregados(data.carritoCompras);
    } else {
      setProductsAgregados([]);
    }
  };
  function irPaginaAnterior() {
    window.history.back();
  }

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error.message}</p>;

  return (
    <>
      <button onClick={() => irPaginaAnterior()}>Volver</button>
      <div id="containerProducts" className={styles.container_products}>
        {ProductosFiltrados.map((e) => (
          <ShoeProducts key={e.id} {...e} />
        ))}
      </div>
      <button onClick={() => ""}>Comprar</button>
    </>
  );
}
