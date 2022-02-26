import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyles.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <h1>Sunnyside</h1>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
        <div onClick={handleNav} className='hamburger'>
          {!nav ? <FaBars className='icon' /> : <FaTimes className='icon' />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
