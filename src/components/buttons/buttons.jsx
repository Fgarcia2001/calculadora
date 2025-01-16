import style from "./buttons.module.css"
export const Buttons = ({id, value, onClick}) =>{
    return (
        <div className={style.button} value={value} onClick={onClick}>
            <p>{id}</p>
        </div>
    )
}