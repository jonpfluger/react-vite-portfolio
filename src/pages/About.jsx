import React from 'react';
import headshot from '../assets/images/selfies/selfie4.jpg'

function About() {
    return (
        <div id='about-me' className="container my-3 flex-md-column flex-lg-row">
            <img id='headshot' src={headshot} alt="Recent picture of Jon Pfluger" />
            <div id='bio'>
                <h1>Jon Pfluger</h1>
                <h2>Full Stack Web Developer</h2>
                <p>Driven and results-oriented full-stack web developer with over 2 years of experience in designing, developing, and deploying scalable web applications, and over 8 years of experience in a leadership role. Adept at collaborating with cross-functional teams to deliver innovative solutions that enhance user experience and drive business growth. Demonstrated expertise in problem-solving, coding best practices, and maintaining high standards of quality and performance. Passionate about staying current with industry trends and continuously improving technical skills to address emerging challenges. Proven track record of managing projects from conception through deployment, ensuring timely and successful completion.</p>
            </div>
        </div>
    )
}

export default About