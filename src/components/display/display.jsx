import style from "./display.module.css"
import { Buttons } from "../buttons/buttons.jsx"
import { botones } from "./botones.js"
import { useState } from "react"
export const Display = () => {

    const [operacion, setOperacion] = useState("");
    const handlerChange = (event) =>{
        setOperacion(event.target.value)
    }
    const handlerClick = (event) =>{
        
        setOperacion(prevOperacion => prevOperacion + event.target.value);  
    }
    return (
        <div className={style.display}>
            <div className={style.minipantalla}>
                <input type="text" className={style.operacion} value={operacion} onChange={handlerChange}/>
            </div>
            <div className={style.botones}>
                {botones.map((valor, index) => {
                    return(
                        <Buttons key={index} id={valor} value={valor} onClick={handlerClick}></Buttons>
                    )
                } )}
            </div>
        </div>
    )
}

