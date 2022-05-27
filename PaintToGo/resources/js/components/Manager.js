import {useNavigate} from "react-router-dom"
import "../../css/Dashboard.css";
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
                <div className="sidebar">
                    <h1 class="mt-4 px-2">Manager {user_id}</h1>
                    <hr/>
                    <NavLink to="/managerNullTable">
                        Dashboard
                    </NavLink>
                    <NavLink to="/order">
                        Inventory
                    </NavLink>
                    <NavLink to="/request">
                        Requests
                    </NavLink>
                    <br/><br/><br/><br/><br/><br/>
                    <a class="logout" onClick = {logOut}> Log Out </a>
                </div>
                
                <div className="content">
                    <h1>Welcome, Branch Manager {user_id} (Branch {branch_id})!</h1>
                </div>
        </div>
    )
}