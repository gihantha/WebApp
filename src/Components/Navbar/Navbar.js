import React from 'react'

import './Navbar.css'
import logo from '../../Assets/logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img style={{height: "36.11px", width: "238.89px"}} src={logo} alt='logo' />
      </div>
      <ul className='nav-menu'>
        <li>Services</li>
        <li>About Us</li>
        <li>Contacts</li>
        <li>Careers</li>
      </ul>
    </div>
  )
}

export default Navbar
