import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


const FilmDetails = () =>{
    const [Detail, setDetail] = useState([])

    const { Filmsid } = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${Filmsid}`)
            .then(res => {
                return res.json();
            })
            .then(allDetail => {
                setDetail(allDetail);
            })
    }, [])

    return (
        <div className="container">
                <div className="col-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Title: {Detail.title}</h1>
                            <p className="card-text">Description: {Detail.description}</p>
                            <p className="card-text">Director: {Detail.director}</p>
                            <p className="card-text">Producer: {Detail.producer}</p>
                            <p className="card-text">Release Date: {Detail.release_date}</p>
                            <p className="card-text">People: <Link to="/people/">List of people</Link></p>
                            <p className="card-text">Species:<a href={`${Detail.species}`}>{`${Detail.species}`}</a></p>
                            <p className="card-text">Locations:<a href={`${Detail.locations}`}>{`${Detail.locations}`}</a></p>
                            <p className="card-text">Vehicles:<a href={`${Detail.vehicles}`}>{`${Detail.vehicles}`}</a></p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default FilmDetails