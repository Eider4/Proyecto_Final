import React, { useEffect, useState } from "react";
import { auth } from "../../../Firebase/credenciales";
import { onAuthStateChanged, signOut } from "firebase/auth";
import style from "./newStyles.module.css";
import Inf_Usuario from "./Inf_Usuario/Inf_Usuario";
import InicaCorreoPassword from "./inicaCorreoPassword/InicaCorreoPassword";
import UseVerificacionUsario from "../../../Hooks/UseVerificacionUusario";

const Login = () => {
  const [Login, setLogin] = useState(false);
  const { User: currentUser, registrado } = UseVerificacionUsario();
  // console.log("user: ", currentUser);
  // console.log("registrado: ", registrado);
  // console.log({ Login });

  return (
    <div className={style.newHeaderInf}>
      {currentUser ? (
        <div>
          <Inf_Usuario user={currentUser} signOut={signOut} auth={auth} />
        </div>
      ) : (
        <>
          {Login ? (
            <div className={style.Div_IniciarSesion}>
              <button
                className={style.newCloseButton}
                onClick={() => setLogin(false)}
              >
                X
              </button>
              <InicaCorreoPassword />
            </div>
          ) : (
            <button className={style.newButton} onClick={() => setLogin(true)}>
              Inicia sesión
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Login;
