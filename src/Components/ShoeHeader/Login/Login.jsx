// import React, { useEffect, useState } from "react";
// import { auth, provider } from "../../../Firebase/credenciales";
// import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
// import styles from '../header.module.css';

// const Login = ({ setCurrentUser }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsLoading(false);
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, [setCurrentUser]);

//   const IniciarSesion = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       console.error("Error during sign in with Google", error);
//     }
//   };

//   const CerrarSesion = async () => {
//     try {
//       await signOut(auth);
//       setCurrentUser(null); // Limpia el estado del usuario después de cerrar sesión
//     } catch (error) {
//       console.error("Error during sign out", error);
//     }
//   };

//   if (isLoading) {
//     return <p>Cargando...</p>;
//   }

//   return (
//     <div>
//       {auth.currentUser ? (
//         <div>
//           <p>Bienvenido, {auth.currentUser.displayName}!</p>
//           <button onClick={CerrarSesion}>Cerrar Sesión</button>
//         </div>
//       ) : (
//         <button onClick={IniciarSesion}>Iniciar Sesión</button>
//       )}
//     </div>
//   );
// };

// export default Login;
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../../Firebase/credenciales";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import Inf_Usuario from "./Inf_Usuario/Inf_Usuario";

const Login = () => {
  const [currentUser, setCurrentUser] = useState(null);
  //para ver si ya esta suscrito
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
  //para iniciar sesion
  const IniciarSesion = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during sign in with Google", error);
    }
  };
  // para cerrar sesion
  const CerrarSesion = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during sign out", error);
    }
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Bienvenido, {currentUser.displayName}!</p>
          <Inf_Usuario usuario={currentUser} />
          <button onClick={CerrarSesion}>Cerrar Sesión</button>
        </div>
      ) : (
        <button onClick={IniciarSesion}>Iniciar Sesion</button>
      )}
    </div>
  );
};

export default Login;
