import React, { useState } from 'react'
import PropTypes from 'prop-types'


import logo from './assets/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from '../Menu'


export const NavbarContext = React.createContext();
export const Header = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const [navbarOpen, setNavbarOpen] = useState(false);

   const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <div
      className={`${'head'}`}
      {...otherProps}
    >
      <div className={'back'}>
        <div className={`${'head-cont'}${className ? ` ${className}` : ''}`} >
          <div className={'dd'}>
            <img
              src={logo}
              alt="background-tablet"
            >
            </img>
          </div>
          <NavbarContext.Provider value={{ navbarOpen, setNavbarOpen }}>
            <button onClick={handleToggle} className={'hamburger'}><GiHamburgerMenu /></button>
         
            <Menu open={navbarOpen} openFunc={setNavbarOpen}></Menu>
          </NavbarContext.Provider>
        </div>

      </div>

    </div>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
