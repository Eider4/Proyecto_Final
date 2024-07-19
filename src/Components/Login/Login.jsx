import React, { useEffect, useState } from "react";
import firebaseapp from "../../Firebase/credenciales";
import style from "./Login.module.css";
import {
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  setDoc,
  getDocs,
  collection,
  doc
} from "firebase/firestore";

const autenticacion1 = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);

export default function Login({ usuario1, setUsuario }) {
  const [registrado, setRegistrado] = useState(false);
  const [logeado, setLogeado] = useState(false);
  const [loginActivo, setLoginActivo] = useState(false);
  const [InfUsuario, setInfUsuario] = useState(false);
  const [usuario, setUsuarios] = useState(null);
  const [direccion, setDireccion] = useState("");
  const [sobrenombre, setSobrenombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [gustos, setGustos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pais, setPais] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usuarioPerfil, setUsuarioPerfil] = useState({});

  const obtenerUsuarioActual = () => {
    const usuarioActual = usuario1;
    if (usuarioActual) {
      setUsuarios(usuarioActual);
    } else {
      console.log("No hay usuario logueado");
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("El email es obligatorio");
      return false;
    } else if (!emailPattern.test(email)) {
      setEmailError("El email no es válido");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("La contraseña es obligatoria");
      return false;
    } else if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const manejarActualizarPerfil = async (e) => {
    e.preventDefault();
    console.log(autenticacion1.currentUser.uid);
    await setDoc(doc(db, "usuarios", autenticacion1.currentUser.uid), {
      name: sobrenombre,
      direccion: direccion,
      country: pais,
      gustos: gustos,
      telefono: telefono,
    });
    setMensaje("Hecho 👌");
  };

  const infPerfil = async () => {
    const getDoc = await getDocs(collection(db, "usuarios"));
    const docs_Array = getDoc.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const docs_id = docs_Array.findIndex(
      (e) => e.id === autenticacion1.currentUser.uid
    );
    console.log(docs_id);
    setUsuarioPerfil(docs_Array[docs_id]);
    console.log(docs_Array[docs_id]);
  };

  const Submit = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;
    const isEmailValid = validateEmail(correo);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      if (registrado) {
        await createUserWithEmailAndPassword(autenticacion1, correo, password);
      } else {
        await signInWithEmailAndPassword(autenticacion1, correo, password);
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(autenticacion1, (usuario) => {
      if (usuario) {
        setLogeado(true);
        setUsuario(usuario);
      } else {
        setLogeado(false);
      }
    });
    infPerfil();
  }, []);

  return (
    <div>
      {logeado && (
        <>
          <button
            onClick={() => {
              setInfUsuario(true);
              obtenerUsuarioActual();
            }}
          >
            &#128100;
          </button>
          {InfUsuario && (
            <>
              <div className={style.div_Login}>
                <button onClick={() => setInfUsuario(false)}>X</button>
                <div>
                  {usuario ? (
                    <div>
                      <button
                        className={style.btn_cerrar_sesion}
                        onClick={() => signOut(autenticacion1)}
                      >
                        <img src="https://cdn.icon-icons.com/icons2/368/PNG/512/Logout_37127.png" />
                      </button>
                      <h2>Perfil de Usuario</h2>
                      <p>Correo Electrónico: {usuario.email}</p>
                      <p>Nombre: {usuarioPerfil.name}</p>
                      <p>Direccion: {usuarioPerfil.direccion}</p>
                      <p>Pais: {usuarioPerfil.country}</p>
                      <p>Gustos: {usuarioPerfil.gustos}</p>
                      <p>telefono: {usuarioPerfil.telefono}</p>
                    </div>
                  ) : (
                    <p>No hay usuario logueado.</p>
                  )}
                </div>
                <div>
                  <h2>Actualizar Sobrenombre</h2>
                  <form onSubmit={(e) => manejarActualizarPerfil(e)}>
                    <div>
                      <label>Sobrenombre:</label>
                      <input
                        type="text"
                        value={sobrenombre}
                        onChange={(e) => setSobrenombre(e.target.value)}
                        placeholder="sobrenombre"
                      />
                      <label>Direccion</label>
                      <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        placeholder="direccion"
                      />
                      <input
                        type="text"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="telefono"
                      />
                      <input
                        type="text"
                        value={gustos}
                        onChange={(e) => setGustos(e.target.value)}
                        placeholder="gustos"
                      />
                      <input
                        type="text"
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                        placeholder="pais"
                      />
                    </div>
                    <button type="submit">Actualizar</button>
                  </form>
                  {mensaje && <p>{mensaje}</p>}
                </div>
              </div>
            </>
          )}
        </>
      )}
      {!logeado && (
        <>
          <button
            className={style.agregar_usuario}
            onClick={() => setLoginActivo(true)}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/138/138659.png" />
          </button>
          {!logeado && setUsuario("")}
          {loginActivo && (
            <div className={style.div_Login}>
              <div className={style.div_nologin_form}>
                <form onSubmit={Submit}>
                  <span
                    className={style.btn_nologin_salir}
                    onClick={() => setLoginActivo(false)}
                  >
                    X
                  </span>
                  <h2>{registrado ? "Registrarse" : "Iniciar Sesión"}</h2>
                  <label htmlFor="email"></label>
                  <input required id="email" type="email" placeholder="Email" />
                  {emailError && <p className="error">{emailError}</p>}
                  <label htmlFor="password"></label>
                  <input
                    required
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                  {passwordError && <p className="error">{passwordError}</p>}
                  <button id="inputSubmit" type="submit">
                    {registrado ? "Regístrate" : "Inicia Sesión"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRegistrado(!registrado);
                    }}
                  >
                    {registrado
                      ? "¿Ya tienes cuenta? Inicia Sesión"
                      : "¿No tienes cuenta? Regístrate"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
