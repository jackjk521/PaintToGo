import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import ConsultationForm from './ConsultationForm';
import OrderPage from './OrderPage';
import RequestPage from './RequestPage';
import LoginRegister from './LoginRegister'
import Dashboard from './Dashboard'


function Main() {
   
    return (
        <div className="container">
            <BrowserRouter>
                <div className = "Header">
                    <span className='Menu'> <Link to="/"> Home </Link></span>
                    <span className='Menu'> <Link to="/consult"> Consultation </Link></span>
                    <span className='Menu'> <Link to="/order"> Orders </Link></span>
                    <span className='Menu'> <Link to ="/request"> Requests </Link></span>
                </div>
                <div>
                    <Routes>

                        <Route path="/consult" element = {<ConsultationForm/>}/> 
                        <Route path="/order" element = {<OrderPage/>} /> 
                        <Route path="/request" element = {<RequestPage/>}/>
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
