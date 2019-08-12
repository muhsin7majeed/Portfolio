import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="navLists">
        <li>
          <Link to="/">
            <i className="fa fa-home" />
          </Link>
        </li>
        <li>
          <Link to="/works">
            <i className="fa fa-code" />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fa fa-user" />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fa fa-phone" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
