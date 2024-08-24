import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"

// Comp Dinamico

export const Title = ({level = 'h1', children, ...props}) => { 
  //  table, header y form jsx
  const {isDark} = useContext(ThemeContext)
  let textStyle = {color: isDark ? "#e7e3e3" : "#000"}
  const validLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const Tag = validLevels.includes(level) ? level : 'h1';
  return(
    <Tag {...props} style={textStyle}>{children}</Tag>
  )
}