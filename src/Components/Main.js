import React from 'react';
import {FaDownload} from 'react-icons/fa';
import profile from '../Images/profile_girl.jpg';

const Main = () => {
    return (
        <div className="Main-css" id="Home">
            <div className="Main">
            <p className="MainHeading-css">Jane Doe</p>
            <p className="MainDescription-css">Photographer and Web Designer</p>
             <img src={profile} alt="Profile"  className="profile-Responsive"/>
            <button className="btnMain-css"><FaDownload/> Download Resume</button>
        </div>
    </div>
    )
}

export default Main
