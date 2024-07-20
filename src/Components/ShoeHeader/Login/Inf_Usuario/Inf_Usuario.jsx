// // import React, { useEffect, useState } from "react";
// // import { app } from "../../../../Firebase/credenciales";
// // import { collection, getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
// // import style from "../../header.module.css";

// // const base_datos = getFirestore(app);

// // export default function Inf_Usuario({ usuario }) {
// //   const [usuarioPerfil, setUsuarioPerfil] = useState({});
// //   const [datosFormulario, setDatosFormulario] = useState({
// //     nombre: "",
// //     direccion: "",
// //     pais: "",
// //     gustos: "",
// //     telefono: "",
// //   });
// //   const [actualizar_inf, setActualizarInf] = useState(false);

// //   useEffect(() => {
// //     const infPerfil = async () => {
// //       try {
// //         const docRef = doc(base_datos, "usuarios", usuario.uid);
// //         const docSnap = await getDoc(docRef);
// //         if (docSnap.exists()) {
// //           const datos = docSnap.data();
// //           setUsuarioPerfil(datos);
// //           setDatosFormulario({
// //             nombre: datos.nombre || "",
// //             direccion: datos.direccion || "",
// //             pais: datos.pais || "",
// //             gustos: datos.gustos || "",
// //             telefono: datos.telefono || "",
// //           });
// //         } else {
// //           console.log("¡No existe tal documento!");
// //         }
// //       } catch (error) {
// //         console.log("Error al obtener el documento:", error);
// //       }
// //     };

// //     infPerfil();
// //   }, [usuario.uid]);

// //   const manejarActualizarPerfil = (event) => {
// //     const { name, value } = event.target;
// //     setDatosFormulario({
// //       ...datosFormulario,
// //       [name]: value,
// //     });
// //   };

// //   const submitEvent = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await setDoc(doc(base_datos, "usuarios", usuario.uid), datosFormulario);
// //       setActualizarInf(false);
// //       // Actualiza la información del perfil después de enviar el formulario
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Perfil de Usuario</h2>
// //       <p>Correo Electrónico: {usuario.email}</p>
// //       <p>Nombre: {usuarioPerfil.nombre}</p>
// //       <p>Dirección: {usuarioPerfil.direccion}</p>
// //       <p>País: {usuarioPerfil.pais}</p>
// //       <p>Gustos: {usuarioPerfil.gustos}</p>
// //       <p>Teléfono: {usuarioPerfil.telefono}</p>
// //       <p>UID: {usuario.uid}</p>
// //       <button onClick={() => setActualizarInf(true)}>Actualizar</button>

// //       {actualizar_inf && (
// //         <div>
// //           <h1>Actualizar Datos</h1>
// //           <form onSubmit={submitEvent}>
// //             <div>
// //               <label>Nombre:</label>
// //               <input
// //                 type="text"
// //                 name="nombre"
// //                 value={datosFormulario.nombre}
// //                 onChange={manejarActualizarPerfil}
// //                 placeholder="Nombre"
// //               />
// //               <label>Dirección:</label>
// //               <input
// //                 type="text"
// //                 name="direccion"
// //                 value={datosFormulario.direccion}
// //                 onChange={manejarActualizarPerfil}
// //                 placeholder="Dirección"
// //               />
// //               <label>País:</label>
// //               <input
// //                 type="text"
// //                 name="pais"
// //                 value={datosFormulario.pais}
// //                 onChange={manejarActualizarPerfil}
// //                 placeholder="País"
// //               />
// //               <label>Gustos:</label>
// //               <input
// //                 type="text"
// //                 name="gustos"
// //                 value={datosFormulario.gustos}
// //                 onChange={manejarActualizarPerfil}
// //                 placeholder="Gustos"
// //               />
// //               <label>Teléfono:</label>
// //               <input
// //                 type="text"
// //                 name="telefono"
// //                 value={datosFormulario.telefono}
// //                 onChange={manejarActualizarPerfil}
// //                 placeholder="Teléfono"
// //               />
// //             </div>
// //             <button type="submit">Actualizar</button>
// //           </form>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import style from "../../header.module.css";
// import { app } from "../../../../Firebase/credenciales";
// import {
//   collection,
//   getFirestore,
//   setDoc,
//   doc,
//   getDoc,
// } from "firebase/firestore";

// const base_datos = getFirestore(app);

// export default function Inf_usuario({ usuario }) {
//   const [activo, setActivo] = useState(false);
//   const [user, setUser] = useState(usuario);
//   const [actualizar_inf, setactualizar_inf] = useState(false);
//   const [datosFormulario, setDatosFormulario] = useState({
//     nombre: "",
//     direccion: "",
//     pais: "",
//     gustos: "",
//     telefono: "",
//   });

//   const manejarActualizarPerfil = (event) => {
//     const { name, value } = event.target;
//     setDatosFormulario({
//       ...datosFormulario,
//       [name]: value,
//     });
//   };

//   const submitEvent = async (e) => {
//     e.preventDefault();
//     try {
//       await setDoc(doc(base_datos, "usuarios", user.uid), datosFormulario);
//       setactualizar_inf(false);
//       infPerfil(); // Actualiza la información del perfil después de enviar el formulario
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const [usuarioPerfil, setUsuarioPerfil] = useState({});

//   const infPerfil = async () => {
//     try {
//       const docRef = doc(base_datos, "usuarios", user.uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         const datos = docSnap.data();
//         setUsuarioPerfil(datos);
//         setDatosFormulario({
//           nombre: datos.nombre || "",
//           direccion: datos.direccion || "",
//           pais: datos.pais || "",
//           gustos: datos.gustos || "",
//           telefono: datos.telefono || "",
//         });
//       } else {
//         console.log("¡No existe tal documento!");
//       }
//     } catch (error) {
//       console.log("Error al obtener el documento:", error);
//     }
//   };

//   useEffect(() => {
//     infPerfil();
//   }, [user.uid]);

//   return (
//     <div>
//       <button onClick={() => setActivo(true)}>Información</button>

//       {activo && (
//         <>
//           <div className={style.div_Login}>
//             <button onClick={() => setActivo(false)}>Cerrar</button>
//             <div>
//               {user ? (
//                 <div>
//                   <h2>Perfil de Usuario</h2>
//                   <p>Correo Electrónico: {user.email}</p>
//                   <p>Nombre: {usuarioPerfil.nombre}</p>
//                   <p>Dirección: {usuarioPerfil.direccion}</p>
//                   <p>País: {usuarioPerfil.pais}</p>
//                   <p>Gustos: {usuarioPerfil.gustos}</p>
//                   <p>Teléfono: {usuarioPerfil.telefono}</p>
//                   <p>UID: {user.uid}</p>
//                 </div>
//               ) : (
//                 <p>No hay usuario logueado.</p>
//               )}
//             </div>
//             <button onClick={() => setactualizar_inf(true)}>Actualizar</button>
//             {actualizar_inf && (
//               <div>
//                 <h1>Actualizar Datos</h1>
//                 <form onSubmit={submitEvent}>
//                   <div>
//                     <label>Nombre:</label>
//                     <input
//                       type="text"
//                       name="nombre"
//                       value={datosFormulario.nombre}
//                       onChange={manejarActualizarPerfil}
//                       placeholder="Nombre"
//                     />
//                     <label>Dirección:</label>
//                     <input
//                       type="text"
//                       name="direccion"
//                       value={datosFormulario.direccion}
//                       onChange={manejarActualizarPerfil}
//                       placeholder="Dirección"
//                     />
//                     <label>País:</label>
//                     <input
//                       type="text"
//                       name="pais"
//                       value={datosFormulario.pais}
//                       onChange={manejarActualizarPerfil}
//                       placeholder="País"
//                     />
//                     <label>Gustos:</label>
//                     <input
//                       type="text"
//                       name="gustos"
//                       value={datosFormulario.gustos}
//                       onChange={manejarActualizarPerfil}
//                       placeholder="Gustos"
//                     />
//                     <label>Teléfono:</label>
//                     <input
//                       type="text"
//                       name="telefono"
//                       value={datosFormulario.telefono}
//                       onChange={manejarActualizarPerfil}
//                       placeholder="Teléfono"
//                     />
//                   </div>
//                   <button type="submit">Actualizar</button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import style from "../Login.module.css";
import { app } from "../../../../Firebase/credenciales";
import {
  collection,
  getFirestore,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

const base_datos = getFirestore(app);

export default function Inf_usuario({ usuario }) {
  const [activo, setActivo] = useState(false);
  const [user, setUser] = useState(usuario);
  const [actualizar_inf, setactualizar_inf] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    direccion: "",
    pais: "",
    gustos: "",
    telefono: "",
  });

  // Manejar cambios en el formulario de actualización
  const manejarActualizarPerfil = (event) => {
    const { name, value } = event.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value,
    });
  };

  // Manejar el envío del formulario de actualización
  const submitEvent = async (e) => {
    e.preventDefault();
    try {
      // Actualiza el documento en Firestore con los nuevos datos del formulario
      await setDoc(doc(base_datos, "usuarios", user.uid), datosFormulario);
      setactualizar_inf(false);
      infPerfil(); // Actualiza la información del perfil después de enviar el formulario
    } catch (err) {
      console.log(err);
    }
  };

  const [usuarioPerfil, setUsuarioPerfil] = useState({});

  // Recuperar la información del perfil del usuario desde Firestore
  const infPerfil = async () => {
    try {
      const docRef = doc(base_datos, "usuarios", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const datos = docSnap.data();
        setUsuarioPerfil(datos);
        setDatosFormulario({
          nombre: datos.nombre || "",
          direccion: datos.direccion || "",
          pais: datos.pais || "",
          gustos: datos.gustos || "",
          telefono: datos.telefono || "",
        }); // Establece los datos del formulario con los datos del usuario
      } else {
        console.log("¡No existe tal documento!"); // Error si el documento no existe
      }
    } catch (error) {
      console.log("Error al obtener el documento:", error); // Error en la obtención del documento
    }
  };

  useEffect(() => {
    infPerfil();
  }, [user.uid]);

  return (
    <div>
      <button onClick={() => setActivo(true)}>Información</button>

      {activo && (
        <>
          <div className={style.div_Login}>
            <button onClick={() => setActivo(false)}>Cerrar</button>
            <div>
              {user ? (
                <div>
                  <h2>Perfil de Usuario</h2>
                  <p>Correo Electrónico: {user.email}</p>
                  <p>Nombre: {usuarioPerfil.nombre}</p>
                  <p>Dirección: {usuarioPerfil.direccion}</p>
                  <p>País: {usuarioPerfil.pais}</p>
                  <p>Gustos: {usuarioPerfil.gustos}</p>
                  <p>Teléfono: {usuarioPerfil.telefono}</p>
                  <p>UID: {user.uid}</p>
                </div>
              ) : (
                <p>No hay usuario logueado.</p> // Mensaje si no hay usuario logueado
              )}
            </div>
            <button onClick={() => setactualizar_inf(true)}>Actualizar</button>
            {actualizar_inf && (
              <div>
                <h1>Actualizar Datos</h1>
                <form onSubmit={submitEvent}>
                  <div>
                    <label>Nombre:</label>
                    <input
                      type="text"
                      name="nombre"
                      value={datosFormulario.nombre}
                      onChange={manejarActualizarPerfil}
                      placeholder="Nombre"
                    />
                    <label>Dirección:</label>
                    <input
                      type="text"
                      name="direccion"
                      value={datosFormulario.direccion}
                      onChange={manejarActualizarPerfil}
                      placeholder="Dirección"
                    />
                    <label>País:</label>
                    <input
                      type="text"
                      name="pais"
                      value={datosFormulario.pais}
                      onChange={manejarActualizarPerfil}
                      placeholder="País"
                    />
                    <label>Gustos:</label>
                    <input
                      type="text"
                      name="gustos"
                      value={datosFormulario.gustos}
                      onChange={manejarActualizarPerfil}
                      placeholder="Gustos"
                    />
                    <label>Teléfono:</label>
                    <input
                      type="text"
                      name="telefono"
                      value={datosFormulario.telefono}
                      onChange={manejarActualizarPerfil}
                      placeholder="Teléfono"
                    />
                  </div>
                  <button type="submit">Actualizar</button>
                </form>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
