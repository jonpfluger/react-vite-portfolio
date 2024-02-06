import React from 'react';
import headshot from '../assets/images/me-2-min.png'

function About() {
    return (
        <div id='about-me' className="container my-3 flex-md-column flex-lg-row">
            <img id='headshot' src={headshot} alt="Recent picture of Jon Pfluger" />
            <div id='bio'>
                <h2>Full Stack Web Developer</h2>
                <p>Full-stack developer leveraging background in mobile technology to build professional and intuitive user experiences on the web. Recently graduated from a full-stack coding boot camp from the University of Wisconsin with a 4.0 GPA. Post graduation, was hired as the TA for the next class in the boot camp. Excellent problem solver. Success with an agile team in a CI/CD pipeline.</p>
            </div>
        </div>
    )
}

export default About