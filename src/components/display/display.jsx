import style from "./display.module.css"
import { Buttons } from "../buttons/buttons.jsx"
import { botones } from "./botones.js"
export const Display = () => {

    return (
        <div className={style.display}>
            <div className={style.minipantalla}>
                pantalla
            </div>
            <div className={style.botones}>
                {botones.map((valor) => {
                    return(
                        <Buttons id={valor}></Buttons>
                    )
                } )}
            </div>
        </div>
    )
}

