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
<<<<<<< HEAD
import Profile from './Profile';
=======
import AdminNullTablesPage from './AdminNullTablesPage';
import ManagerNullOrdersPage from './NullOrderTable';

>>>>>>> a16d0ef5eb2dc0c3135bab6cec3f7eaabc715d3d

function Main() {
   
    return (
        <div className="container">
            <BrowserRouter>
                <div className = "Header">
                    <span className='Menu'> <Link to="/"> Home </Link></span>
                    <span className='Menu'> <Link to="/consult"> Consultation </Link></span>
                    <span className='Menu'> <Link to="/order"> Orders </Link></span>
                    <span className='Menu'> <Link to ="/request"> Requests </Link></span>

                    <span className='Menu'> <Link to="/adminNullTables"> Admin To Approve Tables </Link></span>
                    <span className='Menu'> <Link to ="/managerNullTable"> Manager To Approve Orders</Link></span>
                </div>
                <div>
                    <Routes>

                        <Route path="/consult" element = {<ConsultationForm/>}/> 
                        <Route path="/order" element = {<OrderPage/>} /> 
                        <Route path="/request" element = {<RequestPage/>}/>
                        <Route path="/" element = {<LoginRegister/>}/> 
                        <Route path="/dashboard" element = {<Dashboard/>}/>
<<<<<<< HEAD
                        <Route path="/profile" element = {<Profile/>}/>
=======

                        <Route path="/adminNullTables" element = {<AdminNullTablesPage/>}/>
                        <Route path="/managerNullTable" element = {<ManagerNullOrdersPage/>}/>
>>>>>>> a16d0ef5eb2dc0c3135bab6cec3f7eaabc715d3d
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
