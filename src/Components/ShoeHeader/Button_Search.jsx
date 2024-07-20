import { useState } from "react";
// import MiniPantalla from "../mini-pantalla/MiniPantalla";
import style from "./header.module.css";

function Button_Search(item) {
  const [ShowMiniPantalla, setShowMiniPantalla] = useState(false);
  return (
    <>
      <button
        className={style.Button_div_search_Buttons}
        key={item.id}
        onClick={() => setShowMiniPantalla(true)}
      >
        {item.title}
      </button>
      {/* {ShowMiniPantalla && <MiniPantalla {...item} setShowMiniPantalla={setShowMiniPantalla} />} */}
    </>
  );
}

export default Button_Search;
