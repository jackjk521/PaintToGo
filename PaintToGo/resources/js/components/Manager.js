import {useNavigate} from "react-router-dom"
import "../../css/Dashboard.css";
import { NavLink } from "react-router-dom";
import ManagerNullOrdersPage from './NullOrderTable';
import OrderPage from "./OrderPage";
import { HashLink } from "react-router-hash-link";

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
                    <h1 class="mt-4 px-2">Manager</h1>
                    <hr/>
                    <HashLink smooth to='#null'> Dashboard </HashLink>
                    <HashLink smooth to='#inventory'> Inventory </HashLink>
                    <NavLink to="/request">
                        Requests
                    </NavLink>
                    <br/><br/><br/><br/><br/><br/>
                    <a class="logout" onClick = {logOut}> Log Out </a>
                </div>
                
                <div className="content">
                    <h1>Welcome, Branch Manager {user_id} (Branch {branch_id})!</h1>
                    
                    <div id="null">
                    <h1> NULL statuses </h1>
                        <ManagerNullOrdersPage/>
                    </div> 

                    <hr/>

                    <div id="inventory">
                        <h1> Products list </h1>
                            <OrderPage/>
                    </div>
                </div>
        </div>
    )
}