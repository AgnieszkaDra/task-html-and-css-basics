import React, {useState} from 'react'
import PropTypes from 'prop-types'
import logo from './assets/logo.svg'
import classes from './styles.module.css'

// import { GiHamburgerMenu } from 'react-icons/gi';

export const Menu = (props) => {
  const {
    className,
    open,
    ...otherProps
  
  } = props

  const [navbarOpen, setNavbarOpen] = useState(false);

  // const handleToggle = () => {
  //   setNavbarOpen(!navbarOpen);
  // }
  // const context = React.useContext(NavbarContext);

  return (
    <nav className={'nav'}>
     
      {/* <button onClick={handleToggle} className={classes.hamburger__btn}><GiHamburgerMenu/></button>     */}
        <ul className={`${'nav__menu'} ${open ? `${'nav__block'}` : `${'nav__hide'}`}`}>
            <li><a href="/" className={'nav__link'}>The team</a></li>
            <li><a href="/" className={'nav__link'}>Pricing</a></li>
            <li><a href="/" className={'nav__link'}>Features</a></li>
        </ul>
    </nav>
  )
}

Menu.propTypes = {
  className: PropTypes.string
}

export default Menu
