import React, { useEffect, useState } from "react";
import { auth } from "../../../Firebase/credenciales";
import { onAuthStateChanged, signOut } from "firebase/auth";
import style from "./newStyles.module.css";
import Inf_Usuario from "./Inf_Usuario/Inf_Usuario";
import InicaCorreoPassword from "./inicaCorreoPassword/InicaCorreoPassword";

const Login = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [Login, setLogin] = useState(false);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className={style.newHeaderInf}>
      {currentUser ? (
        <div>
          <Inf_Usuario usuario={currentUser} signOut={signOut} auth={auth} />
        </div>
      ) : (
        <>
          {Login ? (
            <div className={style.Div_IniciarSesion}>
              <button className={style.newCloseButton} onClick={() => setLogin(false)}>X</button>
              <InicaCorreoPassword />
            </div>
          ) : (
            <button className={style.newButton} onClick={() => setLogin(true)}>Inicia sesión</button>
          )}
        </>
      )}
    </div>
  );
};

export default Login;
