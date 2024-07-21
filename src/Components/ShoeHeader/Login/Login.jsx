// Login.js

import React, { useEffect, useState } from "react";
import { auth, provider } from "../../../Firebase/credenciales";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import Inf_Usuario from "./Inf_Usuario/Inf_Usuario";
import style from './Login.module.css'; // Asegúrate de importar los estilos

const Login = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const IniciarSesion = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during sign in with Google", error);
    }
  };

  return (
    <div className={style.header_inf}>
      {currentUser ? (
        <div>
          {/* <p>Bienvenido,<br />{ currentUser.displayName}!</p> */}
          <Inf_Usuario usuario={currentUser} signOut={signOut} auth={auth} />
        </div>
      ) : (
        <button className={style.login_button} onClick={IniciarSesion}>
          Iniciar Sesión
        </button>
      )}
    </div>
  );
};

export default Login;
