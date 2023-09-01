import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ChocolateHamburger } from '../ChocolateHamburger'
import Menu from '../Menu'


export const NavbarContext = React.createContext();
export const ChocolateHamburgerContext = React.createContext()

export const Navigation = (props) => {
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
    <>
       {/* <h1 className={'header__logo'}>
        <img
          src={logo}
          alt="logo"
        >
        </img>
      </h1> */}
      <NavbarContext.Provider value={{ navbarOpen, setNavbarOpen }}>
        <button onClick={handleToggle} className={'hamburger'}>
          <ChocolateHamburger open={navbarOpen} openFunc={setNavbarOpen} />
        </button>
        <Menu open={navbarOpen} openFunc={setNavbarOpen}></Menu>
      </NavbarContext.Provider>
    </>
)
}

Navigation.propTypes = {
  className: PropTypes.string
}

export default Navigation
