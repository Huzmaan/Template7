import {React, useEffect} from 'react'
import "./Navbar.css";
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
    const [mobileIcon,setMobileIcon] =useEffect(false)
    return (
        <nav className="Navbar">
        <div  className= "Main-Navbar">
    <li> <a href="#" className="li-css" >Home</a></li>
    <li><a href="#Porfolio" className="li-css">Portfolio</a></li>
    <li><a href="#About" className="li-css">About</a></li>
       <li><a href="#Contact" className="li-css">Contact</a></li>
        </div>
        <div>
            <a onclick={() =>setMobileIcon(!mobileIcon)} href="#"><GiHamburgerMenu/></a>
        </div>
        </nav>
        
    )
}

export default Navbar

