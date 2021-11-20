import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const score = useSelector(state => state.scores);
    // console.log("score", score);
    
    return (
        <>
            <nav className="navbar">
                <div className="title">
                    <a href="/">Quiz-Time</a>
                </div>

                <div className="nav-score">
                    <button>Your Score: {score}</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar
