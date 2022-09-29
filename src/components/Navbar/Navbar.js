import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png'

const Navbar = () => {
    return ( 
        <div className='navbar-container'>
            <img src={logo} alt="" />
            <h1>Games we love!</h1>
        </div>
    );
};

export default Navbar;