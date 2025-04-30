import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router'
import "./headerStyles.css"
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatePresence , motion} from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [scrollTrigger,setScrollTrigger] = useState(false);
  const changeColor = ()=>{
    if(window.scrollY>100){
      setScrollTrigger(true)
    }
    else{
      setScrollTrigger(false)
    }
  }
  window.addEventListener("scroll",changeColor)

  const [menuClicked , setMenuClicked] = useState(false);

  const handleMenuClicked = ()=>{
    console.log(menuClicked)
    setMenuClicked(!menuClicked)
  }

  return (
    <div className={scrollTrigger ? "header changeColor":"header"}>
      <div className='header-logo-container'>
        <img src={logo} alt="ieee-logo" />
      </div>
      <div className='menu-items-list-container'>
        <ul className='menu-items-list'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link href="#"><button><p>Contact Us</p></button></Link>
            </li>
        </ul>
      </div>
      <div onClick={handleMenuClicked} className='mobile-menu-button'>
        <MenuIcon></MenuIcon>
      </div>
      <AnimatePresence>
      {
        menuClicked &&         <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.2 , duration:0.5}}
        exit={{opacity:0 , transition:{duration:0.5}}}
        className='mobile-menu'>
          <div className='mobile-link'><Link to="/">Home</Link></div>
          <div className='mobile-link'><Link to="/about">About</Link></div>
          <div className='mobile-link'><Link to="/events">Events</Link></div>
          <div onClick={handleMenuClicked} className='close-menu'><CloseIcon></CloseIcon></div>
        </motion.div>
      }
      </AnimatePresence>
    </div>
  )
}

export default Header
