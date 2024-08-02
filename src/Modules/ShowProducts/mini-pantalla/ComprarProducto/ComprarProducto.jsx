import { useState } from "react";
import UseVerificacionUsario from "../../../../Hooks/UseVerificacionUusario";
import Login from "../../../ShoeHeader/Login/Login";

export default function ComprarProducto() {
  const { User, registrado } = UseVerificacionUsario();
  const [activo, setActivo] = useState(false);

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
