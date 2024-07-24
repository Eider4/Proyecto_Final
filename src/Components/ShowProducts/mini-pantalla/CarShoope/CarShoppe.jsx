import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { app, auth } from "../../../../Firebase/credenciales";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

const basedatos = getFirestore(app);

export default function CarShoppe({ id, CarImg, styles }) {
  const [enCarrito, setEnCarrito] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [productosAgregados, setProductosAgregados] = useState([]);

  const cargarPerfil = async (usuario) => {
    const coleccion = doc(basedatos, "usuarios", usuario.uid);
    const documento = await getDoc(coleccion);
    const data = documento.data();
    if (data && data.carritoCompras) {
      setProductosAgregados(data.carritoCompras);
      // Verifica si el producto actual está en el carrito
      setEnCarrito(data.carritoCompras.includes(id));
    } else {
      setProductosAgregados([]);
      setEnCarrito(false);
    }
  };

  const actualizarCarrito = async (usuario, productosActualizados) => {
    try {
      await updateDoc(doc(basedatos, "usuarios", usuario.uid), {
        carritoCompras: productosActualizados,
      });
      setProductosAgregados(productosActualizados);
      setEnCarrito(productosActualizados.includes(id));
    } catch (err) {
      console.log(err);
    }
  };

  const manejarToggleCarrito = async () => {
    if (usuario) {
      const productosActualizados = enCarrito
        ? productosAgregados.filter((e) => e !== id) // Eliminar del carrito
        : [id, ...productosAgregados]; // Agregar al carrito
      await actualizarCarrito(usuario, productosActualizados);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        setUsuario(usuario);
        await cargarPerfil(usuario);
        console.log(`Usuario registrado: ${usuario.email}`);
      } else {
        console.log("No hay usuario registrado");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {!enCarrito && (
        <img
          src={CarImg}
          alt={"Agregar al carrito"}
          width="40px"
          onClick={manejarToggleCarrito}
        />
      )}
      {enCarrito && (
        <>
          <button
            className={styles.button_borrar}
            onClick={manejarToggleCarrito}
          >
            Eliminar
          </button>
          {productosAgregados.map((e, i) => (
            <span key={i}>{e}---</span>
          ))}
        </>
      )}
    </div>
  );
}
