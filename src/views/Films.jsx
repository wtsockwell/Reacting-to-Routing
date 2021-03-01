import React, { useState, useEffect } from 'react';

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
                        </div>
                    </div>
                </div>
            ))}
        </div>)
}

export default Films