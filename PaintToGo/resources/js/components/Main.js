import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginRegister from './LoginRegister'
import Customer from './Customer'
import Admin from './Admin'
import Manager from './Manager'
import Dashboard from './Dashboard'


function Main() {

    const level_name = sessionStorage.getItem('level_name');

    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element = {<LoginRegister/>}/> 
                        <Route path="/dashboard" element = {<Dashboard/>}/>
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
