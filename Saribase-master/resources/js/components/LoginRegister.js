import React , {useState} from "react";
import "./LoginRegister.css";
import {BrowserRouter, Routes, Route, Link, useNavigate, withRouter} from 'react-router-dom';   

const LoginRegister = () => {
  const[addClass, setAddClass] = useState("");
  const navigate = useNavigate();

  const [Info, setInfo] = useState({
    username:'',
    email:'',
    password:''
  });

  const handleInput = (e) =>{
    const {name, value} = e.target;

    setInfo(prevState =>({
        ...prevState,
        [name] : value
    }))
}

  const signUp = async (e) =>{
    e.preventDefault();

    const res = await axios.post('http://127.0.0.1:8000/api/signUp', Info);

    if(res.data.status === 200)
    {
      console.log(res.data.message);
       setInfo({
            userпame: '',
            email: '',
            password: '',
        });
    }
  }

  const login = async (e) =>{
    e.preventDefault();

    try{
      const res = await axios.post('http://127.0.0.1:8000/api/login', Info);
      
      if(res.data.status === 200)
      {
        console.log(res.data.message);
         setInfo({
              email: '',
              password: '',
          });
        if(res.data.status === 200) {
          navigate('/dashboard');
        }
      }
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
        <div className= "loginBody">
          <div className={`container ${addClass}`} id="container">
            <div className="form-container sign-up-container">
              
              <form className="LRForm" onSubmit = {signUp}>
                <h1 className="header1">Create Account</h1>
                <input className ="inputBox" name = 'username' type="text"  onChange={handleInput} value={Info.username || ""} placeholder="NAME" />
                <input className ="inputBox" name = 'email' type="email" onChange={handleInput} value={Info.email || ""}   placeholder="EMAIL" />
                <input className ="inputBox"  name = 'password' type="password" onChange={handleInput} value={Info.password || ""}  placeholder="PASSWORD" />
                <button className="loginRegbuttons" type="submit"> REGISTER </button>
              </form>
            
            </div>
            <div className="form-container sign-in-container">
              
              <form className="LRForm" onSubmit={login}>
                <h1 className="header1">Login</h1>
                <input className ="inputBox" name = 'email' type="email" onChange={handleInput} value={Info.email || ""} placeholder="EMAIL" />
                <input className ="inputBox" name = 'password' type="password" onChange={handleInput} value={Info.password || ""} placeholder="PASSWORD" />
                <button className="loginRegbuttons" type="submit" > LOGIN </button>
              </form>
            
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <button className="loginRegbuttons ghost" id="signIn" onClick= {()=> setAddClass("")}>
                    GO TO LOGIN
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <button className="loginRegbuttons ghost" id="signUp" onClick= {()=> setAddClass("right-panel-active")}>
                      GO TO REGISTER
                  </button>
                </div>
                </div>
            </div>
          </div>
      </div>
    );
};
export default LoginRegister;