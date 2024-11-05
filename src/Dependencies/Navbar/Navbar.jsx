import React from 'react'
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import './Navbar.css'
import Assets from '../../Assets/Assets';

const Navbar = () => {
  return (
    <nav className='nav-bar'>
        <div className="logo">
         <img src={Assets.logo} alt="Logo" />
        </div>
    </nav>
  );
};

export default Navbar