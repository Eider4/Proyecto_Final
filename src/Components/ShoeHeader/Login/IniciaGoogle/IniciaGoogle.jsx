import { signInWithPopup } from "firebase/auth";
import { providerGoogle, auth } from "../../../../Firebase/credenciales";
import style from "../newStyles.module.css";

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
      <button className={style.newButton} onClick={IniciaconGoogle} style={{backgroundColor:'#ddd', color:'#000'}} > 
        Inicia con Google{" "}
        <img
          src="https://www.keyweo.com/wp-content/uploads/2022/03/el-logo-g-de-google.png"
          alt="Google"
          width="40px"
        />
      </button>
    </>
  );
}
