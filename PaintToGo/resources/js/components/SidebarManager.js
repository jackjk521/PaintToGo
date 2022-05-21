import React from "react";
import "../../css/Sidebar.css";
import { NavLink } from "react-router-dom";

export default function SideMan() {
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
                    Requests
                </NavLink>
            </li>
        </ul>
    </div>
  );
}