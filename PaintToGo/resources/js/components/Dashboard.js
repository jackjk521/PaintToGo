import React from 'react';
import Customer from './Customer'
import Admin from './Admin'
import Manager from './Manager'


export default function Dashboard() {

    const level_name = sessionStorage.getItem('level_name');

    return (
        <div>

            
            {level_name == "Admin" && <Admin />}
            {level_name == "Manager" && <Manager />}
            {level_name == "Customer" && <Customer />}
    
     
        </div>
    );
}

