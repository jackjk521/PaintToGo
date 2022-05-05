import {useNavigate} from "react-router-dom"

export default function Customer(){
   
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    return ( <div> 
        <h1>Customer page</h1> 
        <button onClick = {logOut}> LogOut </button> 
        </div>
    )
}