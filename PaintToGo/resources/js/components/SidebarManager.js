import React from "react";
import "../../css/Sidebar.css";
import { NavLink } from "react-router-dom";

export default function SideMan() {
  return (
    <div className="sidebar">
        <NavLink className="nav-link" to="/dashboard">
            Dashboard
        </NavLink>
        <NavLink className="nav-link" to="/profile">
            Inventory
        </NavLink>
        <NavLink className="nav-link" to="/profile">
            Requests
        </NavLink>
    </div>
  );
}