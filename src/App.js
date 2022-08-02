import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import NavBar from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("mytheme");
    if (localTheme) {
      setTheme(localStorage.getItem("mytheme"));
    } else {
      setTheme(localStorage.setItem("mytheme", "light"));
    }
  }, []);

  return (
    <div
      className={`main-container ${
        theme === "dark" ? "dark-body" : "light-body"
      } `}
    >
      <Router>
        <NavBar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
