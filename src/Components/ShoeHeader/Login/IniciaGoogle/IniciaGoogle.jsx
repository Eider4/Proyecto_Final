import { signInWithPopup } from "firebase/auth";
import { providerGoogle, auth } from "../../../../Firebase/credenciales";

export default function IniciaGoogle() {
  const IniciaconGoogle = async () => {
    try {
      await signInWithPopup(auth, providerGoogle);
    } catch (error) {
      console.log("No se pudo ingresar con Google", error);
    }
  };
  return (
    <>
      <button onClick={IniciaconGoogle}>Inicia con Google</button>
    </>
  );
}
