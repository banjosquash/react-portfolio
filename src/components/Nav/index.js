import React from "react";
// bringing in props from portfoliioContainer to render the current page 
function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
        <header>
            <h1><a id="home" href="#home" onClick={() => handlePageChange('Home')}><span> Brayden's Portfolio</span></a></h1>
            <nav>
                <ul>
                    <li>
                        <a data-testid="about" href="#about-me" onClick={() => handlePageChange('About')} className={currentPage}>About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage}>My Work</a>
                    </li>
                    <li>
                        <a data-testid='contact' onClick={() => handlePageChange('Contact')} href='#contact-form' className={currentPage}>Contact Me</a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage}>My Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
        <section className="hero">
          <h2 className="hero-title">Brayden McMahan</h2>
        </section>
        </div>
    );
}

export default Nav;