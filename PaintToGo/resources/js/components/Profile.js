import {useNavigate} from "react-router-dom"

export default function Profile(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');

    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    return ( <div> 
        <h1>User Profile {user_id}</h1> 
        <button onClick = {logOut}> LogOut </button> 
        </div>
    )
}