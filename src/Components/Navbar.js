import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../Styles/Navbar.css";
import Logo from "../Assets/Logo_Horizontal.png";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide"
      id={openLinks ? "open" : "close"}>
           <img src={Logo}  alt="50px"/>
           
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/aboutUs"> About US </Link>
          <Link to="/Reservation"> Reservation</Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/aboutUs"> About Us </Link>
        <Link to="/Reservation"> Reservation </Link>
        
        <button onClick={toggleNavbar}>
           <ReorderIcon />
        </button>

      </div>
    </div>
  );
}

export default Navbar;