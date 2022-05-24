import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate, Router} from 'react-router-dom'
import LoginRegister from './LoginRegister'
import Dashboard from './Dashboard'
import Profile from './Profile';

function Main() {
   
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element = {<LoginRegister/>}/> 
                        <Route path="/dashboard" element = {<Dashboard/>}/>
                        <Route path="/profile" element = {<Profile/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
    
        </div>

    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
