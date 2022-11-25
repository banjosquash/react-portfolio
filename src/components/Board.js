import React from "react";
import Home from "./Home";
import './Board.css'

export const Board = ({board, onClick}) => {
    return (
        <div className="board">
        {board.map((value, index) => {
            return <Home value={value} onClick={() => value===null && onClick(index)}/>
        })}
        
        </div>

    )
}