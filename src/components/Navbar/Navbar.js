import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className='app__navbar'>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><Link to = '/landing'>Landing</Link> </li>
      <li className='p__opensans'><Link to = '/about'>About</Link> </li>
      <li className='p__opensans'><Link to = '/blog'>Blog</Link> </li>
        
     
    </ul>
  </nav>
  
  )


export default Navbar;