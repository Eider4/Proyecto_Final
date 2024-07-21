import { useState } from "react";
import style from "./header.module.css";
import MiniPantalla from "../ShowProducts/mini-pantalla/MiniPantalla";

function Button_Search(item) {
  const [showMiniPantalla, setShowMiniPantalla] = useState(false);

  return (
    <>
      <button
        className={style.Button_div_search_Buttons}
        key={item.id}
        onClick={() => setShowMiniPantalla(true)}
      >
        {item.title}
      </button>
      {showMiniPantalla && <MiniPantalla {...item} setShowMiniPantalla={setShowMiniPantalla} />}
    </>
  );
}

export default Button_Search;
