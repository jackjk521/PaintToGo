import {useNavigate} from "react-router-dom"
import SideMan from './SidebarManager'
import "../../css/Manager.css";
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
                <nav class="navbar top navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    Color City Paint Store
                </a>
                <NavLink className="nav-link" to="/profile">
                    <h4 class="text-light"><BsFillPersonFill/></h4>
                </NavLink>
                </nav>

                <SideMan/>
                
                <div className="content">
                    <h1>Manager page {user_id} {branch_id}</h1>
                    <button onClick = {logOut}> LogOut </button>
                </div>
        </div>
    )
}