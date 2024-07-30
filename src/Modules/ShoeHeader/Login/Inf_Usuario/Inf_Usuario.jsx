import React, { useEffect, useState } from "react";
import style from "../Login.module.css";
import { app } from "../../../../Firebase/credenciales";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import DepartamensColombia from "./DepartamentosColombia";

const base_datos = getFirestore(app);

export default function Inf_Usuario({ user, signOut, auth }) {
  const [usuarioPerfil, setUsuarioPerfil] = useState(null);
  const [activo, setActivo] = useState(false);
  const [actualizar_inf, setActualizarInf] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    direccion: "",
    departamento: "",
    municipio: "",
    pais: "",
    gustos: "",
    telefono: "",
    carritoCompras: [],
  });

  const manejarActualizarPerfil = (event) => {
    const { name, value } = event.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value,
    });
  };

  const submitEvent = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(base_datos, "usuarios", user.uid), datosFormulario);
      setActualizarInf(false);
      infPerfil();
    } catch (err) {
      console.log(err);
    }
  };

  const CerrarSesion = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error durante el cierre de sesión", error);
    }
  };

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
          departamento: datos.departamento || "",
          municipio: datos.municipio || "",
          pais: datos.pais || "",
          gustos: datos.gustos || "",
          telefono: datos.telefono || "",
          carritoCompras: datos.carritoCompras || [],
        });
      } else {
        console.log("No se encontró el documento");
      }
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
    }
  };

  return (
    <div>
      <h3 onClick={() => setActivo(true)}>
        {usuarioPerfil ? (
          <>
            Bienvenido, <br />
            {usuarioPerfil.nombre}
          </>
        ) : (
          "Inf"
        )}
      </h3>
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
                    <b>Correo Electrónico:</b> {user.email}
                  </p>
                  <p>
                    <b>Nombre:</b>{" "}
                    {usuarioPerfil
                      ? usuarioPerfil.nombre
                      : "Actualiza tu nombre"}
                  </p>
                  <p>
                    <b>Departamento:</b>{" "}
                    {usuarioPerfil
                      ? usuarioPerfil.departamento
                      : "Actualiza tu departamento"}
                  </p>
                  <p>
                    <b>Municipio:</b>{" "}
                    {usuarioPerfil
                      ? usuarioPerfil.municipio
                      : "Actualiza tu municipio"}
                  </p>
                  <p>
                    <b>Dirección:</b>{" "}
                    {usuarioPerfil
                      ? usuarioPerfil.direccion
                      : "Actualiza tu direccion"}
                  </p>
                  <p>
                    <b>País:</b>{" "}
                    {usuarioPerfil
                      ? usuarioPerfil.pais
                      : "Actualiza tu pais    "}
                  </p>
                  <p>
                    <b>Gustos:</b>{" "}
                    {usuarioPerfil
                      ? usuarioPerfil.gustos
                      : "Actualiza tus gustos"}
                  </p>
                  <p>
                    <b>Teléfono:</b>{" "}
                    {usuarioPerfil
                      ? usuarioPerfil.telefono
                      : "Actualiza tu telefono"}
                  </p>
                  <p>
                    <b>UID:</b> {user.uid}
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
                    <DepartamensColombia
                      departamento={datosFormulario.departamento}
                      municipio={datosFormulario.municipio}
                      manejarActualizarPerfil={manejarActualizarPerfil}
                    />
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
    </div>
  );
}
