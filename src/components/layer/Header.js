import React from 'react'

import logo from '../../assets/img/erl-tech.png'
import {NavLink} from "react-router-dom";
import Container from "./Container";

const Header = () => {
  return(
    <div className='header' >
      <Container>
        <div className='header-info'>
          <NavLink className='logo-box' to='/' >
            <img src={logo} alt='hello' className='logo' />
          </NavLink>
          <div className='nav-links'>
            <NavLink to='/lectures'>Lectures</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header