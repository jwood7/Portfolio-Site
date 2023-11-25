import React from 'react';
import About_Thumb from '../Images/About_Thumb.jfif';
import Image from 'react-bootstrap/Image';
import ResumeGameDev from '../Downloads/Jacob Wood Game Dev Resume.pdf';
import ResumeSoftwareDev from '../Downloads/Jacob Wood Software Dev Resume.pdf';

// const logos = require.context('../Images/Logos', true);
// const logoList = logos.keys().map(logo => logos(logo));

import Skills from './Skills.js';


function About() {
    return (
        <div>
        <div className="page-border">
                {/* <div className="page-border-outer"></div>
                <div className="white page-border-inner"></div>
                <div className="about page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="page-border-outer"></div> */}
            </div>
        <div className='about page split'>
            
            <div className="about-div">
                <Image src={About_Thumb} alt={"picture of Jacob Wood"} className='profile-image' />  
                <div>
                    <h2 className="mt-5 mb-4">Skills</h2>
                    {/* <div>
                    {logoList.map((logo, index) => (
                        <img key={index} src={logo.default} alt={`logo-${index}`} />
                    ))}
                    </div> */}
                    <div>
                    {Skills.skills.map((logo) => (
                        <img className="skill-image" key={logo?.label} src={logo?.image} alt={logo?.label} title={logo?.label} />
                    ))}
                    </div>
                </div>
            </div>
            <div className='about-div'>
                <h1>JACOB WOOD</h1>
                <p className="about-links"> 
                    <a href="https://github.com/jwood7">Github</a> | <a href="https://www.linkedin.com/in/jacobwood176/">LinkedIn</a> | <a href="https://yakobay.itch.io/">Itch.io</a>
                </p>
                <p> 🎓 I am a recent Computer Science graduate with a Minor in Visual Arts and Technology at Stevens Institute of Technology <br/>
                    🏢 I have work experience with Front End and Full Stack Web Development<br/>
                    🔭 I am working on game design projects, and discord bots that analyze gameplay stats
                </p>
                <button className="btn btn-dark m-1"><a href={ResumeSoftwareDev} download>Software Dev Resume</a></button>
                <button className="btn btn-dark m-1"><a href={ResumeGameDev} download>Game Dev Resume</a></button>

            </div>
           
        </div>
        </div>
    );
}

export default About;
