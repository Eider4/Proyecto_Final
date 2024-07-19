import ShoeHeader from "../../components/ShoeHeader/ShoeHeader";
import ShoeProducts from "../../components/ShowProducts/ShowProducts";

function Button_Add_Card({autenticacion, setAutenticacion}) {
  const CardShopArray = JSON.parse(localStorage.getItem("AddCar"));

  return (
    <>
      <ShoeHeader
        autenticacion={autenticacion}
        setAutenticacion={setAutenticacion}
      />
      <h2>hola</h2>
      {CardShopArray.map((e) => (
        <ShoeProducts key={e.id} {...e} />
      ))}
    </>
  );
}

export default Button_Add_Card;
