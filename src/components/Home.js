import React from "react";
import './Home.css'
export default function Home ({ value, onClick }){
    const style = value === 'X' ? 'box X' : 'box O'; 
    return (
        <button className={style} onClick={onClick}>{value}</button>
    );
}