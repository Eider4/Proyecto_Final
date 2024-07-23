import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { app, auth } from "../../Firebase/credenciales";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const basedatos = getFirestore(app);

export default function CheckUser({ setAgregarCarrito, id }) {
  const [User, setUser] = useState(null);
  const [ProductosAgregados, setProductosAgregados] = useState([]);

  const inPerfil = async (usuario) => {
    try {
      const coleccion = doc(basedatos, "usuarios", usuario.uid);
      const dacumento = await getDoc(coleccion);
      if (dacumento.exists()) {
        const data = dacumento.data();
        if (data && data.carritoCompras) {
          setProductosAgregados(data.carritoCompras);
          data.carritoCompras.forEach((e) => console.log(e));
        } else {
          console.log("No hay productos en el carrito de compras");
        }
      } else {
        console.log("El documento no existe");
      }
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        setUser(usuario);
        await inPerfil(usuario);
        console.log(`Usuario registrado: ${usuario.email}`);
      } else {
        console.log("No hay usuario registrado");
      }
    });
    setAgregarCarrito(false);

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <p>
        Verificando usuario registrado... Mira la consola para ver los detalles.
      </p>
    </div>
  );
}
