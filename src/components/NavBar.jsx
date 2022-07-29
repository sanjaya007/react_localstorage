import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo.png";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="nav-box flex-css-row-sb">
        <div className="logo-box">
          <img src={logoImg} alt="" />
        </div>
        <div className="link-box flex-css-row-start">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
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
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="close-icon" onClick={() => setToggle(false)}>
          <CloseIcon />
        </div>
      </div>
    </>
  );
};

export default NavBar;
