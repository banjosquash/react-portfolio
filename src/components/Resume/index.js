import React from "react";
import resumePicOne from '../../assets/images/resume-1.png'
import resumePicTwo from '../../assets/images/resume-2.png'

function Resume () {


    return (
        <section id='resume' >
            <h2 className=" my-resume">My Resume</h2>
            <div>
            <img src={resumePicOne} alt='resume'/>
            <br></br>
            <img src={resumePicTwo} alt='resume'/>
            </div>
        </section> 
    );
}
export default Resume;