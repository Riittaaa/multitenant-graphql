import React from "react";
import logo from "../images/logo.png";
import "../css/Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><img src={logo} alt="" /></li>
          <li>
            {/* <a href={<Home />}>Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>

          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/add-blog">Add Blog</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>Login</li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
