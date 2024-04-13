import React from 'react';
import headshot from '../assets/images/selfies/selfie4.jpg'

function About() {
    return (
        <div id='about-me' className="container my-3 flex-md-column flex-lg-row">
            <img id='headshot' src={headshot} alt="Recent picture of Jon Pfluger" />
            <div id='bio'>
                <h1>Jon Pfluger</h1>
                <h2>Full Stack Web Developer</h2>
                <p>Results-driven Full Stack Web Developer with a passion for building intuitive user experiences. Graduated with flying colors from the University of Wisconsin’s full-stack coding boot camp, earning a 4.0 GPA. Recognized for exceptional skills in computer programming and mentoring. Hired as a TA prior to graduation, played a pivotal role in guiding the next generation of developers. Proven track record of success as a developer and mentor. Seeking opportunities to contribute to dynamic projects in a collaborative environment.</p>
            </div>
        </div>
    )
}

export default About