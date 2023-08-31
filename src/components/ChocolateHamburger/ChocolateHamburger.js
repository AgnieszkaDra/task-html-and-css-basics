import React, { useState } from 'react'
import PropTypes from 'prop-types'





export const NavbarContext = React.createContext();
export const ChocolateHamburger = (props) => {
  const {
    className,
    onClick,
    ...otherProps
  } = props

  const [navbarOpen, setNavbarOpen] = useState(false);


   const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }
if(open) {
return (
  <div className={`${"hamburger__icon"}`}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
)
   
} else if(!open){

  return (
    <div className={`${"icon nav-icon-1"}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
   

  
}

ChocolateHamburger.propTypes = {
  className: PropTypes.string
}

export default ChocolateHamburger
