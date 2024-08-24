import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"

export const ThemeBtn = () => {
  const {isDark, dispatch} = useContext(ThemeContext)
  let style = isDark ? "btn-light" : "btn-dark";
  let icon = isDark ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-fill"></i>;
  const toggleTheme = () => dispatch({type: 'toggleTheme'})
  return (
    <div className='py-4'>
      <button className={`btn ${style}`} onClick={toggleTheme}>
        {icon}
      </button>
    </div>
  )
}
