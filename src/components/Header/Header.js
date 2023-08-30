import React, { useState } from 'react'
import PropTypes from 'prop-types'


import classes from './styles.module.css'
import logo from './assets/logo.svg'
import { ChocolateHamburger } from '../ChocolateHamburger'
import Menu from '../Menu'


export const NavbarContext = React.createContext();
export const ChocolateHamburgerContext = React.createContext()

export const Header = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [ChocolateHamburgerOpen, setChocolateHamburgerOpen] = useState(false)

   const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  const handleToggleChocolate = () => {
    setChocolateHamburgerOpen(!ChocolateHamburger);
  }

  return (
    <div
      className={'header__container container'}
    >
        <div className={'logo-container'}>
            <img
              src={logo}
              alt="logo"
            >
            </img>
          </div>
          <NavbarContext.Provider value={{ navbarOpen, setNavbarOpen }}>
            <button onClick={handleToggle} className={'hamburger'}> 

    <ChocolateHamburger open={navbarOpen} openFunc={setNavbarOpen}/>

             
         
           
     </button>
         
            <Menu open={navbarOpen} openFunc={setNavbarOpen}></Menu>
          </NavbarContext.Provider>
        </div>

      
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
