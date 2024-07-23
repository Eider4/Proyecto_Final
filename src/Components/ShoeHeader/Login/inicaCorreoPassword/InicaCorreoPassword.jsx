import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../../Firebase/credenciales";

export default function InicaCorreoPassword() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const submit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <h1>Inica Correo Password</h1>
      <form onSubmit={submit}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="E-mail"
          id="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          id="password"
        />
        <button type="submit">Iniciar</button>
      </form>
    </>
  );
}
