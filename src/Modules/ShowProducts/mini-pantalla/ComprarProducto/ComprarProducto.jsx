import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app, auth } from "../../../../Firebase/credenciales";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import UseVerificacionUsario from "../../../../Hooks/UseVerificacionUusario";
import Login from "../../../ShoeHeader/Login/Login";

const bd = getFirestore(app);
export default function ComprarProducto() {
  const { User, registrado } = UseVerificacionUsario();
  const [activo, setActivo] = useState(false);
  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={() => setActivo(true)}>Comprar</button>
      {activo && (
        <>
          {!registrado && (
            <>
              <Login />
            </>
          )}
          {registrado && <></>}
        </>
      )}
    </div>
  );
}
