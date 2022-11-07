import Header from "./components/Header";
import Footer from './components/Footer'
import { createContext, useState } from "react";

export const ThemeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("dark");
 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="app" id={theme}>
        <Header />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
