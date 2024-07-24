import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app, auth } from "../../../../Firebase/credenciales";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const bd = getFirestore(app);
export default function ComprarProducto() {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState();
  useEffect(() => {
    const s = onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        setUser(usuario);
        CargarPerfil(usuario);
        console.log("el usuario es: ", usuario.email);
      } else {
        console.log("error");
      }
    });
    return s;
  }, []);
  const CargarPerfil = async (usuario) => {
    const coleccion = doc(bd, "usuarios", usuario.uid);
    const document = await getDoc(coleccion);
    const data = document.data();
    setUserData(data);
  };

  return <div></div>;
}
