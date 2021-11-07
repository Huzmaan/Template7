import React from 'react';
import {RiFacebookBoxFill} from 'react-icons/ri'
import {FiInstagram} from 'react-icons/fi'
import {SiSnapchat}from 'react-icons/si'
import {FaPinterestP} from 'react-icons/fa'
import{FaTwitter}from 'react-icons/fa'
import {ImLinkedin2} from 'react-icons/im'

const Footer = () => {
    return (
        <div className="footer-css">
            <div className="MainIcon-css">
            <i className="icon-css"><RiFacebookBoxFill/> </i>
            <i className="icon-css"><FiInstagram/></i>
            <i className="icon-css"><SiSnapchat/></i>
            <i className="icon-css"><FaPinterestP/> </i>
            <i className="icon-css"><FaTwitter/></i>
            <i className="icon-css"><ImLinkedin2/></i>
            </div>
            <p>Powered by
              <a className="FooterLink-css" href="https://www.w3schools.com/w3css/default.asp">Huzmaan</a>
            </p>
        </div>
    )
}

export default Footer
