import React from 'react';
import wedding from '../Images/wedding.jpg';
import rocks from '../Images/rocks.jpg';
import sailboat from '../Images/sailboat.jpg';
import underwater from '../Images/underwater.jpg';
import chef from '../Images/chef.jpg';
import p6 from '../Images/p6.jpg';
const Portfolio = () => {
    return (
        <div className="portfolio-css" id="Portfolio">
            <h3 className="portfolioHeading-css"> My Portfolio</h3>
            <div className="ImgPortfolio-css">
            <div className="Imagediv1-css">
                <img className="Image-css" src={wedding}alt="wedding"/>
                <img className="Image-css" src={rocks}alt="rocks"/>
                <img className="Image-css" src={sailboat}alt="sailboat"/>
            </div>
            <div className="Imagediv2-css">
            <img className="Image-css" src={underwater}alt="underwater"/>
            <img className="Image-css" src={chef}alt="chef"/>
            <img className="Image-css" src={wedding}alt="wedding"/>
            <img className="Image-css" src={p6}alt="p6"/>
            </div>
            </div>
        </div>
    )
}

export default Portfolio
