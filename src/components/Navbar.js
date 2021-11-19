import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand text-light">Quiz-Game</a>
                    <form className="d-flex">
                  
                    <button className="btn btn-success" type="submit">Score: 0</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar
