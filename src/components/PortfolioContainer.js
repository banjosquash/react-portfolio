import React, { useState } from 'react';
import Resume from './Resume';
import Nav from './Nav';
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

import { Board } from './Board';

// container to conditionally render pages
 function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('Nav');
// tic tac to variables and functions
    const [board, setboard] = useState(Array(9).fill(null))
    const [xPlaying, setXPlaying] = useState(true);
    const [gameOver, setGameOver] = useState(false)

    const winCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]

    const handleBoxClick = (boxIndex) => {
        const updatedBoard = board.map((value, index) => {
            if(index === boxIndex){
                return xPlaying === true ? 'X' : 'O';
            }else {
                return value;
            }
        })
        checkWinner(updatedBoard)
        setboard(updatedBoard);
        setXPlaying(!xPlaying);
    }

    const checkWinner = (board) => {
        for(let i = 0; i< winCondition.length; i++ ){
            const [x,y,z] = winCondition[i]

            if(board[x] && board[x] === board[y] && board[y]=== board[z]){
                setGameOver(true)
                return board[x]
            }
        }
    }

    const resetBoard = () => {
        setGameOver(false);
        setboard(Array(9).fill(null))
    }

//  conditional rendering 
    const renderPage =()=>{
        if(currentPage === 'Home'){
             return <Board board={board} onClick={gameOver? resetBoard : handleBoxClick}/>    
        }
        if(currentPage === 'About'){
            return <About />
        }
        if(currentPage === 'Portfolio'){
            return <Portfolio />
        }
        if(currentPage === 'Contact'){
            return <Contact />
        }
        if(currentPage === 'Resume'){
            return <Resume />
        }
    };
    // use state to set current page on click
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    )
}
export default PortfolioContainer;