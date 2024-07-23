// providerFacebook,
// providerPhone,
// Login.js

import React, { useEffect, useState } from "react";
import { auth /*providerGoogle*/ } from "../../../Firebase/credenciales";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import Inf_Usuario from "./Inf_Usuario/Inf_Usuario";
import style from "./Login.module.css";
import InicaCorreoPassword from "./inicaCorreoPassword/InicaCorreoPassword";
import IniciaGoogle from "./IniciaGoogle/IniciaGoogle";

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

  // const IniciarSesionGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, providerGoogle);
  //   } catch (error) {
  //     console.error("Error, al iniciar con Google", error);
  //   }
  // };
  // const IniciarSesionFacebook = async () => {
  //   try {
  //     await signInWithPopup(auth, providerFacebook);
  //   } catch (error) {
  //     console.error("Error during sign in with Facebook", error);
  //   }
  // };
  // const IniciarSesionPhone = async () => {
  //   try {
  //     await signInWithPhoneNumber(auth, providerPhone);
  //   } catch (error) {
  //     console.error("Error during sign in with Phone", error);
  //   }
  // };
  return (
    <div className={style.header_inf}>
      {currentUser ? (
        <div>
          <Inf_Usuario usuario={currentUser} signOut={signOut} auth={auth} />
        </div>
      ) : (
        <>
          <IniciaGoogle style={style} />
          {/* <button className={style.login_button} onClick={IniciarSesionGoogle}>Google</button> */}
          <InicaCorreoPassword style={style} />
        </>
      )}
    </div>
  );
};

export default Login;

// {/* <button onClick={IniciarSesionFacebook}>
//             Facebook
//           </button> */}
//           {/* <button onClick={IniciarSesionPhone}>
//             Phone
//           </button> */}
