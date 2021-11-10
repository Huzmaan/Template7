import React from 'react';
import Smoke from '../Images/avatar_smoke.jpg';
import bandmember from '../Images/bandmember.jpg';
import g2 from '../Images/avatar_g2.jpg';
const Reputation = () => {
    return (
        <div className="Reputation-css">
            <h3 className="ReputationHeading-css">My Reputation</h3>
            <div className="MainReputation1-css">
            <img className="ImageReputation-css"src={Smoke}alt="Smoke"/>
            <p className="text">
            Chandler Bing.
            <span className="text-light">
            Web Designer.
            </span>
            </p>
            <p className="line-text">
            Jane Doe is just awesome. I am so happy to have met her!
            </p>
            </div>
            <div className="MainReputation-css">
            <img className="ImageReputation-css"src={bandmember} alt="bandmember" />
            <p className="text">
            Chris Fox.
            <span className="text-light">
            CEO at Mighty Schools.
            </span>
            </p>
            <p className="line-text">
            Jane Doe saved us from a web disaster.
            </p>
            </div>
            <div className="MainReputation-css">
            <img className="ImageReputation-css"src={g2} alt="g2" />
            <p className="text">
            Rebecca Flex.
            <span className="text-light">
            CEO at Company.
            </span>
            </p>
            <p className="line-text">
            No one is better than Jane Doe.
            </p>
            </div>
            </div>
        
    )
}

export default Reputation
