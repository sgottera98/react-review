import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <ul>
          <li><Link to="/" className="text-white font-bold text-center text-xl">Home</Link></li>
          <li><Link to="/login" className="text-white font-bold text-center text-xl">Login</Link></li>
          <li><Link to="/api" className="text-white font-bold text-center text-xl">API</Link></li>
      </ul>
    </nav>
  )
};

export default Navigation;
