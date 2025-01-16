import style from "./display.module.css";
import { Buttons } from "../buttons/buttons.jsx";
import { botones } from "./botones.js";
import { useState } from "react";
export const Display = () => {
  const [operacion, setOperacion] = useState("");
  const handlerChange = (event) => {
    setOperacion(event.target.value);
  };
  const handlerClick = (event) => {
    setOperacion((prevOperacion) => prevOperacion + event.target.value);
  };

  const clear = () => {
    setOperacion("");
  };

  const calcularResultado = () => {
    try {
      const operacionFormateada = operacion.replace(/x/gi, "*");
      setOperacion(eval(operacionFormateada).toString());
    } catch (error) {
      setOperacion("Syntax Error");
    }
  };

  return (
    <div className={style.display}>
      <div className={style.minipantalla}>
        <input
          type="text"
          className={style.operacion}
          value={operacion}
          onChange={handlerChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") calcularResultado();
          }}
        />
      </div>
      <div className={style.botones}>
        {botones.map((valor, index) => {
          return (
            <Buttons
              key={index}
              id={valor}
              value={valor}
              onClick={handlerClick}
            ></Buttons>
          );
        })}
      </div>
      <div className={style.clear} onClick={clear}>
        CLEAR
      </div>
    </div>
  );
};
