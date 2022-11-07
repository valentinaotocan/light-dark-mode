import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ReactSwitch from "react-switch";
import { useContext } from 'react';
import { ThemeContext } from "../App";
import { BsMoonStarsFill } from "react-icons/bs";
import {CgSun} from 'react-icons/cg'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about" className="pl-small">
          About
        </Link>
        <Link to="/contact" className="pl-small">
          Contact
        </Link>
        <div className="switch">
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
            onColor="#888"
            height={30}
            width={64}
            handleDiameter={26}
            checkedIcon={
              <div className="sun">
                <CgSun />
              </div>
            }
            uncheckedIcon={
              <div className="moon">
                <BsMoonStarsFill />
              </div>
            }
          />
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
