import {React, useState} from 'react';
import {FaBars,FaTimes}from 'react-icons/fa';

import "./Navbar.css";

const Navbar = () => {
    const [mobileIcon,setMobileIcon] =useState(false)
    return (
        <nav className="Navbar">
        <div  className= {mobileIcon ? "Nav-link" :"Main-Navbar"}
        onClick={()=> setMobileIcon(false)}
        >
    <li> <a href="#Home" className="li-css" >Home</a></li>
    <li><a href="#Portfolio" className="li-css">Portfolio</a></li>
    <li><a href="#About" className="li-css">About</a></li>
       <li><a href="#Contact" className="li-css">Contact</a></li>
        </div>
        <button className="Mobile-menu-icon"
        onClick={()=>setMobileIcon(!mobileIcon)}>
        {mobileIcon? (<i><FaTimes/></i>):(<i ><FaBars/></i>)}
        </button>
        </nav>
        
    )
}

export default Navbar

