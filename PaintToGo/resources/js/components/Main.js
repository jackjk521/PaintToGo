import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginRegister from './LoginRegister'

function Main() {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element = {<LoginRegister/>}/> 
                        {/* <Route path="/account" element = {<Account/>}/> 
                        <Route path="/dashboard" element = {<Dashboard/>}/> 
                        <Route path = "/history" element = {<History />} /> */}
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
