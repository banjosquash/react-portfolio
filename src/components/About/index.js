import React from "react";
import coverImage from '../../assets/images/IMG_E0313.JPG'

function About() {
    return (
        <section id="about-me" class="content">
            <h2 class="subheader">About Me</h2>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div class="about-me" id="description-of-me">
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quis, veritatis quo inventore unde et cum culpa esse possimus, quam, ipsum saepe adipisci impedit pariatur maiores odit hic assumenda reprehenderit?</p>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At et quia numquam molestias autem placeat suscipit ipsa excepturi ea recusandae tempora nihil obcaecati, unde delectus quae deserunt ipsum libero magni!</p>
            </div>
        </section>
    )
}

export default About;