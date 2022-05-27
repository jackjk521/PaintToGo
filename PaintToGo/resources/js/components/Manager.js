import {useNavigate} from "react-router-dom"
import "../../css/Dashboard.css";
import {BsFillPersonFill} from 'react-icons/bs';
import { NavLink } from "react-router-dom";

export default function Manager(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <div className="page">
                <nav class="navbar fixed-top navbar-dark bg-dark">
                <a class="navbar-brand px-2" href="dashboard">
                    Color City Paint Store
                </a>
                </nav>

                <div className="sidebar">
                    <h1 class="mt-4 px-2">Manager {user_id}</h1>
                    <hr/>
                    <NavLink className="nav-link" to="/managerNullTable">
                        Dashboard
                    </NavLink>
                    <NavLink className="nav-link" to="/order">
                        Inventory
                    </NavLink>
                    <NavLink className="nav-link" to="/request">
                        Requests
                    </NavLink>
                    <br/><br/><br/><br/><br/><br/>
                    <a class="logout" onClick = {logOut}> Log Out </a>
                </div>
                
                <div className="content">
                    <h1>This is Manager {user_id} Branch {branch_id}</h1>
                </div>
        </div>
    )
}