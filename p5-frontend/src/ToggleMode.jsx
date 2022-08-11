import logo from './logo.svg';
import './App.css';
import Sketch from './routes/Sketch1';
import { createContext, useState } from 'react';
import ReactSwitch from "react-switch"

export const ThemeContext = createContext(null)


function ToggleMode({ children }) {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>

  );
}

export default ToggleMode;
