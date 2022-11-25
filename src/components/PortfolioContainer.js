import React, { useState } from 'react';
import Nav from './Nav';
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'


 function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage =()=>{
        if(currentPage === 'About'){
            return <About />
        }
        if(currentPage === 'Portfolio'){
            return <Portfolio />
        }
        if(currentPage === 'Contact'){
            return <Contact />
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    )
}
export default PortfolioContainer;