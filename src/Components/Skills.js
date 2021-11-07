import React from 'react';
import {FaDownload} from 'react-icons/fa'

const Skills = () => {
    return (
        <div className="skills-css">
            <h3 className="skillsHeading-css">My Skills</h3>
            <p className="skills-description">Photography</p>
            <div className="Skilldiv1">
                <p className="skills1">95%</p>
            </div>
            <p className="skills-description">Web Design</p>
            <div className="Skilldiv1"> 
                <p className="skills2">85%</p>
            </div>
            <p className="skills-description">Photoshop</p>
            <div className="Skilldiv1">
                <p className="skills3">
                    80%
                </p>
            </div>
            <div className="skillAgenda-css">
                <div className="skillText-css"> 
                    <span className="skillTextHeading">
                        14+
                    </span>
                    <br/>
                    Partners
                </div>
                <div className="skillText-css">
                    <span className="skillTextHeading">
                        55+
                    </span>
                    <br/>
                    Projects Done
                </div>
                <div className="skillText-css">
                    <span className="skillTextHeading">
                        89+
                    </span>
                    <br/>
                    Happy Clients
                </div>
                <div className="skillText-css">
                    <span className="skillTextHeading">
                        150+
                    </span>
                    <br/>
                    Meetings
                </div>

            </div>
            <button className="btnMain-css"><FaDownload/> Download Resume</button>
        </div>
    )
}

export default Skills
