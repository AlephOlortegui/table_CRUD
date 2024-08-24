import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../context/ThemeProvider"

export const ActiveLink = ({to, children}) => {
  const {isDark} = useContext(ThemeContext);
  const textStyle = {color: isDark ? '#fff' : "#000"}
  
  return (
    <NavLink to={to} 
        className={({isActive}) => isActive ? "mx-3 isActive" : "mx-3"}
        style={textStyle}>{children}</NavLink>
  )
}
