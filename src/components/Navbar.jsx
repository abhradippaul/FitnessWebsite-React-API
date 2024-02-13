import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

function Navbar() {
  return (
    <nav className="text-red-950 px-5 h-[10dvh] flex items-center text-lg md:text-2xl">
      <Link to="/">
        <img className="h-12 w-12 my-4 mr-5" src={Logo} alt="logo" />
      </Link>
      <div className="flex items-center justify-center font-semibold">
        <Link to="/" className="m-2">Home</Link>
        <Link to="/exercise" className="m-2">Exercises</Link>
          
        
      </div>
    </nav>
  );
}

export default Navbar;
