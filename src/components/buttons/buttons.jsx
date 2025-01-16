import style from "./buttons.module.css";
export const Buttons = ({ id, value, onClick }) => {
  return (
    <button className={style.button} value={value} onClick={onClick}>
      {id}
    </button>
  );
};
