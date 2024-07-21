// Inf_Usuario.js

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

export default function Inf_Usuario({ usuario, signOut, auth }) {
  const [activo, setActivo] = useState(false);
  const [user, setUser] = useState(usuario);
  const [actualizar_inf, setActualizarInf] = useState(false);
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
      await setDoc(doc(base_datos, "usuarios", user.uid), datosFormulario);
      setActualizarInf(false);
      infPerfil(); // Actualiza la información del perfil después de enviar el formulario
    } catch (err) {
      console.log(err);
    }
  };

  const CerrarSesion = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during sign out", error);
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
    <>
      <button className={style.button} onClick={() => setActivo(true)}>
        Ver Información
      </button>
      {activo && (
        <div className={style.modal_container}>
          <div className={style.modal_content}>
            <button
              className={style.close_button}
              onClick={() => setActivo(false)}
            >
              &times;
            </button>
            <div className={style.card_container}>
              {user && !actualizar_inf && (
                <div className={style.card}>
                  <h2>Perfil de Usuario</h2>
                  <p>
                    <strong>Correo Electrónico:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Nombre:</strong> {usuarioPerfil.nombre}
                  </p>
                  <p>
                    <strong>Dirección:</strong> {usuarioPerfil.direccion}
                  </p>
                  <p>
                    <strong>País:</strong> {usuarioPerfil.pais}
                  </p>
                  <p>
                    <strong>Gustos:</strong> {usuarioPerfil.gustos}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {usuarioPerfil.telefono}
                  </p>
                  <p>
                    <strong>UID:</strong> {user.uid}
                  </p>
                  <button
                    className={style.button}
                    onClick={() => setActualizarInf(true)}
                  >
                    Actualizar
                  </button>
                </div>
              )}
              {actualizar_inf && (
                <div className={style.card}>
                  <h2>Actualizar Datos</h2>
                  <form onSubmit={submitEvent}>
                    <div className={style.form_group}>
                      <label>Nombre:</label>
                      <input
                        type="text"
                        name="nombre"
                        value={datosFormulario.nombre}
                        onChange={manejarActualizarPerfil}
                        placeholder="Nombre"
                      />
                    </div>
                    <div className={style.form_group}>
                      <label>Dirección:</label>
                      <input
                        type="text"
                        name="direccion"
                        value={datosFormulario.direccion}
                        onChange={manejarActualizarPerfil}
                        placeholder="Dirección"
                      />
                    </div>
                    <div className={style.form_group}>
                      <label>País:</label>
                      <input
                        type="text"
                        name="pais"
                        value={datosFormulario.pais}
                        onChange={manejarActualizarPerfil}
                        placeholder="País"
                      />
                    </div>
                    <div className={style.form_group}>
                      <label>Gustos:</label>
                      <input
                        type="text"
                        name="gustos"
                        value={datosFormulario.gustos}
                        onChange={manejarActualizarPerfil}
                        placeholder="Gustos"
                      />
                    </div>
                    <div className={style.form_group}>
                      <label>Teléfono:</label>
                      <input
                        type="text"
                        name="telefono"
                        value={datosFormulario.telefono}
                        onChange={manejarActualizarPerfil}
                        placeholder="Teléfono"
                      />
                    </div>
                    <button className={style.button} type="submit">
                      Actualizar
                    </button>
                  </form>
                </div>
              )}
            </div>
            <button className={style.button} onClick={CerrarSesion}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
    </>
  );
}
