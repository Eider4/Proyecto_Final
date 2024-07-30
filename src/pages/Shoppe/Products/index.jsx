import { collection, addDoc, getFirestore } from "firebase/firestore";
import products from "../../../../public/Api";
import { app } from "../../../Firebase/credenciales";
import { useEffect, useState } from "react";
const db = getFirestore(app);

const SaveData = async () => {
    try {
      const colRef = collection(db, "products"); // Nombre de la colección
      for (const product of products) {
        await addDoc(colRef, product);
      }
      console.log("Datos guardados correctamente");
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };
  
  const App = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const fetchData = async () => {
        await SaveData();
        setLoading(false); // Cambiar el estado después de guardar los datos
      };
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Guardando datos en Firebase...</div>;
    }
  
    return (
      <div>
        <h1>Datos guardados con éxito</h1>
      </div>
    );
  };
  
  export default App;