import style from "./buttons.module.css"
export const Buttons = ({id}) =>{
    return (
        <div className={style.button}>
            <p>{id}</p>
            
        </div>
    )
}