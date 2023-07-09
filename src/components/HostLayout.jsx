import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Income
        </NavLink>
        <NavLink
          to="houses"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Houses
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
