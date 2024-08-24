import { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext()

//  The reducer function that specifies how the state gets updated. 
const ThemeReducer = (state,action) => { 
  switch (action.type) {
    case 'toggleTheme':
      return !state
    default:
      return state
  }
 }

export const ThemeProvider = ({children}) => { 
  const [isDark, dispatch] = useReducer(ThemeReducer, null, ()=>{
    //  The initializer function that should return the initial state
    const LS_theme = localStorage.getItem('theme');
    // Identity Operator (===) 
    return LS_theme && LS_theme === 'true';
  })
  
  useEffect(() => {
    localStorage.setItem('theme', isDark.toString())
    if(isDark){
      document.querySelector('.bg-theme').classList.add('dark')
    }else{
      document.querySelector('.bg-theme').classList.remove('dark')
    }
  }, [isDark])
  
  return (
    <ThemeContext.Provider value={{isDark, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
 }