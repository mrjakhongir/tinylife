import React from "react";
import { NavLink, Link } from "react-router-dom";
// import userIcon from "../assets/circle-user-regular.svg";

export default function Header() {
  function logOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <div className="header-inner">
      <div>
        <Link to="/" className="logo">
          #TinyLife
        </Link>
      </div>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Host
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          About
        </NavLink>

        <NavLink
          to="/houses"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Houses
        </NavLink>

        <Link to="login" className="nav-link">
          Login
        </Link>

        <button className="nav-link" onClick={logOut}>
          X
        </button>
      </nav>
    </div>
  );
}
