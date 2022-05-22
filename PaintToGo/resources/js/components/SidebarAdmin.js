import React from "react";
import "../../css/Sidebar.css";
import { NavLink } from "react-router-dom";

export default function SideAd() {
  return (
    <div className="sidebar">
        <NavLink className="nav-link" to="/dashboard">
            Dashboard
        </NavLink>
        <NavLink className="nav-link" to="/profile">
            Inventory
        </NavLink>
        <NavLink className="nav-link" to="/profile">
            Transactions
        </NavLink>
        <NavLink className="nav-link" to="/profile">
            Admin CRUD
        </NavLink>
    </div>
  );
}