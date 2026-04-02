import { createContext, useContext } from "react";
export const themeContext = createContext({
    themeMode: "dark",
    darkTheme: () => {  },
    lightTheme: () => { },
});

export const ThemeProvider = themeContext.Provider
export const useTheme = () => useContext(themeContext)