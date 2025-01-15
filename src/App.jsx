import style from "./App.module.css"
import { Display } from "./components/display/display"
function App() {
  
  return (
    <div className={style.calculator}>
      <Display></Display>
    </div>
  )
}

export default App
