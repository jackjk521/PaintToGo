import React from "react";
import "../../css/Sidebar.css";
import { NavLink } from "react-router-dom";

export default function SideAd() {
  return (
    <div>
        <ul>
            <li>
                <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/profile">
                    Inventory
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/profile">
                    Transactions
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/profile">
                    Admin CRUD
                </NavLink>
            </li>
        </ul>
    </div>
  );
}