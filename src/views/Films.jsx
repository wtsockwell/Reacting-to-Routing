import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Films = () => {

    const [Films, setFilms] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => {
                return res.json();
            })
            .then(allFilms => {
                setFilms(allFilms);
            })
    },[])

    return (
        <div className="row justify-content-center mt-5" id="film-container">
            {Films.map(film => (
                <div className="col-md-6" key={`film-card-${film.id}`} >
                    <div className="card mt-2 shadow">
                        <div className="card-body">
                            <h3 className="card-title">{`${film.title}`}</h3>
                            <p className="card-text">{`${film.description}`}</p>
                            <Link to={`/Films/${film.id}`} className="btn btn-dark">Link to the Film's page</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>)
}

export default Films