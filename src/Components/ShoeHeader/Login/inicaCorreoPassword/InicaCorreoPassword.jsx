import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../../Firebase/credenciales";
import style from "../newStyles.module.css";
import IniciaGoogle from '../IniciaGoogle/IniciaGoogle'

export default function InicaCorreoPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrar, setRegistrar] = useState(false);

  const Registrarse = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("error", error);
    }
  };

  const IniciarSesion = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className={style.newDivLogins}>
      <h1>{registrar ? "Registrate" : "Inicia Sesión"}</h1>
      <form onSubmit={(e) => (registrar ? Registrarse(e) : IniciarSesion(e))}>
        <div className={style.newFormGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            id="email"
          />
        </div>
        <div className={style.newFormGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            id="password"
          />
        </div>
        <button className={style.newButton} type="submit">
          {registrar ? "Registrarse" : "Iniciar"}
        </button>
      </form>
      <button
        className={style.newButton}
        onClick={() => setRegistrar(!registrar)}
      >
        {registrar ? "Inicia Sesión" : "Registrate"}
      </button>
      <IniciaGoogle />
    </div>
  );
}
