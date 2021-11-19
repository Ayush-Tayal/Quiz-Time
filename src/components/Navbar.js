import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const score = useSelector(state => state.score)
    console.log("score", score)
    
    return (
        <>
            <nav className="navbar navbar-light bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand text-light">Quiz-Game</a>
                    <form className="d-flex">
                  
                    <button className="btn btn-success" disabled={true} type="submit">Score: 0</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar
