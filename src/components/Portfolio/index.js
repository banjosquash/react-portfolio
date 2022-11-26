import React from "react";

function Portfolio(){


    return (
        <section id="portfolio" className="content">
    <h2 className="subheader my-work">My Work</h2>

    <div className="grid-work-container">

      <div className="grid-item work-1">
        <a href="https://areed98.github.io/RoadE/">
          <h3>RoadE <br></br><span>HTML/CSS/Javascript</span></h3>
        </a>
      </div>

      <div className="grid-item work-2">
        <a href="https://around-the-world-pro-max.herokuapp.com/">
          <h3>Around The World <br></br><span>Handlebars/CSS/Javascript/SQL/Heroku</span></h3>
        </a>
      </div>

      <div className="grid-item work-3">
        <a href="https://banjosquash.github.io/code-quiz/">
          <h3>Code Quiz <br></br><span>HTML/CSS/Javascript</span></h3>
        </a>
      </div>

      <div className="grid-item work-4">
        <a href="https://arcane-hollows-49205.herokuapp.com/">
          <h3>Note Taker <br></br><span>HTML/CSS/Javascript/Express</span></h3>
        </a>
      </div>
      
      <div className="grid-item work-5">
        <a href="https://www.youtube.com/watch?v=AZ5zQtbNdgE">
          <h3>Banjo player <br></br><span>Americas Got Talent 2015!!!</span></h3>
        </a>
      </div> 

      <div className="grid-item work-4">
        <a href="https://arcane-hollows-49205.herokuapp.com/">
          <h3>Note Taker <br></br><span>HTML/CSS/Javascript/Express</span></h3>
        </a>
      </div>

    </div>
  </section>

    )
}
export default Portfolio;