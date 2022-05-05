import {useNavigate} from "react-router-dom"

export default function Manager(){
   
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    return ( <div> 
        <h1>Manager page</h1> 
        <button onClick = {logOut}> LogOut </button> 
        </div>
    )
}