import React from 'react';
import {ImLocation} from 'react-icons/im'
import {BsTelephoneFill}from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import map from '../Images/map.jpg' 
import {FaPaperPlane}from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="contact-css" id="Contact">
            <h3 className="ContactHeading-css">Contact Me</h3>
            <p className="ContactText-css">
                <i className="Icon-css">
                <ImLocation/></i> Chicago,US
                </p>
            <p className="ContactText-css"><i className="Icon-css"> <BsTelephoneFill/></i>Phone:+00 151515</p>
            <p className="ContactText-css"><i className="Icon-css"> <GrMail/></i>Email:mail@mail.com</p>
             <img className="ImageMap-css" src={map} alt="Map"/>
   <p className="text-foam-css">Lets get in touch. Send me a message:</p>
   <form className="foam-css">
   <input type="text" className="Inp-css" placeholder="Name"/>
   <input type="email" className="Inp-css" placeholder="Email"/>
   <input type="text" className="Inp-css" placeholder="Subject"/>
   <input type="text" className="Inp-css" placeholder="Message"/>
   <button className="Submit"> <FaPaperPlane/>SEND MESSAGE</button> 
   </form>
        </div>
    )
}

export default Contact
