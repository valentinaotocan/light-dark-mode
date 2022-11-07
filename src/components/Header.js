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
        <Link to="light-dark-mode/">Home</Link>
        <Link to="light-dark-mode/about" className="pl-small">
          About
        </Link>
        <Link to="light-dark-mode/contact" className="pl-small">
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
        <Route path="light-dark-mode/" element={<Home />} />
        <Route path="light-dark-mode/about" element={<About />} />
        <Route path="light-dark-mode/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
