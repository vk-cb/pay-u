import { createContext, useContext, useMemo, useState } from "react";



export const ThemeContext = createContext()

export const ThemeProvider = ({ children }, props) =>  {
    const [color, setColor] = useState("dark")
    const value = useMemo(() => ({ color, setColor }), [color]);
    return (
        <ThemeContext.Provider value={value} {...props}>
            {children}
        </ThemeContext.Provider>
    )   
}

export const useTheme = () => {

    return useContext(ThemeContext)
    
}   




          
        