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
    <>
     
      {/* <button onClick={handleToggle} className={classes.hamburger__btn}><GiHamburgerMenu/></button>     */}
        <ul className={`${classes.nav__menu} ${open ? '' : `${classes.nav__hide}`}`}>
        <a className={'link'} href={'./#home'}>
                        <li className={classes.item}><img src={logo}></img></li>
                    </a>
                    <a className={'link'} href={'./#home'}>
                      <li className={classes.item4}><a href="/" className={classes.link}>The team</a></li>
                    </a>    
                    <a className={'link'} href={'./#home'}>
                        <li className={classes.item4}><a href="/" className={classes.link}>Pricing</a></li>
                    </a>    
           
                    <a className={'link'} href={'./#home'}>
                      <li className={classes.item4}><a href="/" className={classes.link}>Features</a></li>
                    </a> 
           
        </ul>
    </>
  )
}

Menu.propTypes = {
  className: PropTypes.string
}

export default Menu
