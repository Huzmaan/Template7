import React from 'react';
import {FaDownload} from 'react-icons/fa'

const Main = () => {
    return (
        <div className="Main-css">
            <div className="Main">
            <p className="MainHeading-css">Jane Doe</p>
            <p className="MainDescription-css">Photographer and Web Designer</p>
            <button className="btnMain-css"><FaDownload/> Download Resume</button>
        </div>
    </div>
    )
}

export default Main
