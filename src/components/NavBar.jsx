import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/images/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MaterialUISwitch from "./Switch";

const NavBar = ({ theme, setTheme }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="nav-box flex-css-row-sb">
        <NavLink to={"/"}>
          <div className="logo-box">
            <img src={logoImg} alt="" />
          </div>
        </NavLink>
        <div className="link-box flex-css-row-start">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to={"/movies"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Movies
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Contact
          </NavLink>
          <MaterialUISwitch
            theme={theme}
            onChange={() => {
              if (theme === "light") {
                localStorage.setItem("mytheme", "dark");
                setTheme("dark");
              } else {
                localStorage.setItem("mytheme", "light");
                setTheme("light");
              }
            }}
          />
        </div>
        <div className="tab-box" onClick={() => setToggle(true)}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={
          toggle ? "mobile-nav flex-css active" : "mobile-nav flex-css"
        }
      >
        <div className="link-box flex-css-column">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => setToggle(false)}
          >
            Home
          </NavLink>
          <NavLink
            to={"/movies"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => setToggle(false)}
          >
            Movies
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => setToggle(false)}
          >
            Contact
          </NavLink>
          <MaterialUISwitch
            theme={theme}
            onChange={() => {
              if (theme === "light") {
                localStorage.setItem("mytheme", "dark");
                setTheme("dark");
              } else {
                localStorage.setItem("mytheme", "light");
                setTheme("light");
              }
            }}
          />
        </div>
        <div className="close-icon" onClick={() => setToggle(false)}>
          <CloseIcon />
        </div>
      </div>
    </>
  );
};

export default NavBar;
