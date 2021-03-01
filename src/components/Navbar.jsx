import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="container bg-secondary text-white py-2 my-3">
            <h1 className="text-center">Studio Ghibli Films</h1>
            <div className="d-flex justify-content-center">
                <Link to={`/`} className="btn btn-light mx-1">Home</Link>
                <Link to={`/Films/`} className="btn btn-light mx-1">Films</Link>
                <Link to={`/Characters/`} className="btn btn-light mx-1">Characters</Link>
            </div>
        </header>
    )
}

export default Navbar