import React from 'react';
import About_Thumb from '../Images/About_Thumb.jfif';
import {Image, Modal, Button} from 'react-bootstrap';
import ResumeGameDev from '../Downloads/Jacob Wood Game Dev Resume.pdf';
import ResumeSoftwareDev from '../Downloads/Jacob Wood Software Dev Resume.pdf';
import LinkedIn from '../Images/Logos/linkedin-white.png';
import Github from '../Images/Logos/github-mark-white.svg';
import Itch from '../Images/Logos/itchio-textless-white.svg';

// const logos = require.context('../Images/Logos', true);
// const logoList = logos.keys().map(logo => logos(logo));

import Skills from './Skills.js';




function About() {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedResume, setSelectedResume] = React.useState(null);

    const handleResumeClick = (image) => {
        setSelectedResume(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedResume(null);
    };
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
            
                <div className="about-div pt-5">
                    
                    <div>
                        {/* <h2 className="mt-5 mb-4">Links</h2>
                        <div>
                            <a href="https://github.com/jwood7"><Image src={Github} alt="Github" height={50} className="mx-3"/></a>
                            <a href="https://www.linkedin.com/in/jacobwood176/"><Image src={LinkedIn} alt="LinkedIn" height={50} className="me-2 ms-3"/></a>
                            <a href="https://yakobay.itch.io/"><Image src={Itch} alt="Itch.io" height={50} className="mx-3"/></a>
                        </div> */}
                        <h2 className="mt-5 mb-5 pt-5">Skills</h2>
                        {/* <div>
                        {logoList.map((logo, index) => (
                            <img key={index} src={logo.default} alt={`logo-${index}`} />
                        ))}
                        </div> */}
                        <div className="mt-5">
                        {Skills.skills.map((logo) => (
                            <img className="skill-image" key={logo?.label} src={logo?.image} alt={logo?.label} title={logo?.label} />
                        ))}
                        </div>
                    </div>
                </div>
                <div className='about-div'>
                    <div className='split'>
                        <Image src={About_Thumb} alt={"picture of Jacob Wood"} className='profile-image' /> 
                        <h1 className="px-5 hello" >Hello!</h1>
                    </div>
                    {/* <p className="about-links"> 
                        <a href="https://github.com/jwood7">Github</a> | <a href="https://www.linkedin.com/in/jacobwood176/">LinkedIn</a> | <a href="https://yakobay.itch.io/">Itch.io</a>
                    </p> */}
                    {/* <p> 🎓 I am a recent Computer Science graduate with a Minor in Visual Arts and Technology at Stevens Institute of Technology <br/>
                        🏢 I have work experience with Front End and Full Stack Web Development<br/>
                        🔭 I am working on game design projects, and discord bots that analyze gameplay stats
                    </p> */}
                    <p>
                        My name is Jacob Wood. I am an avid software developer and game designer who loves a challenge where I can apply my creative problem solving skills.
                        I graduated summa cum laude from Stevens Institute of Technology in May 2023, with a GPA of 3.9 out of 4.0, a Bachelor’s of Science in Computer Science and a minor in Visual Arts and Technology.
                    </p>
                    <p>
                        I’ve always had a passion for art and design, as well as a knack for technology and coding, and I have been exploring game design as a means to develop both.  
                        I believe that is the combination of creativity, functionality and experiences that make any software solution something special.  
                        My coding projects for discord bots and my most recent game, Orbit best showcase this as I made creative use of a variety of tools to deliver a functional experience.
                        My goal is to create software that is functional, exciting, and inspiring.
                    </p>
                    <button className="btn btn-dark m-1" onClick={() => handleResumeClick(ResumeSoftwareDev)}>Software Dev Resume</button>
                    <button className="btn btn-dark m-1" onClick={() => handleResumeClick(ResumeGameDev)}>Game Dev Resume</button>
                    
        

                </div>
           
            </div>

            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <iframe src={ResumeSoftwareDev} height="600px" width="100%" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default About;
