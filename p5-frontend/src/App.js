import './App.css';
import Header from './Header';
import Footer from './Footer';
import { createContext, useState } from 'react';
// import ReactSwitch from "react-switch"

export const ThemeContext = createContext(null)


function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <Header />
        <Footer />
      </div>
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode " : "Dark Mode "} </label> */}
            {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/> */}
        </div>
    </ThemeContext.Provider>

  );
}

export default App;
