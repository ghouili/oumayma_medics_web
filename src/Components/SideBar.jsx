import '../Styles/SideBar.css';
import React, { useContext, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { MainContext } from '../Hooks/Context/MainContext';

function SideBar() {

  const { sideBarShown } = useContext(MainContext);
  const location = useLocation();
  return (
    <div className={sideBarShown ? 'sidebar active' : 'sidebar'}>
      <Link to='/' className={location.pathname === '/' ? 'active' : ''} >Home</Link>
      <Link to='/about' className={location.pathname === '/about' ? 'active' : ''} >About</Link>
      <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''} >Contact</Link>

    </div>
  )
}

export default SideBar