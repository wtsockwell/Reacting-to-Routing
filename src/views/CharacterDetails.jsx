import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const CharacterDetails = () => {
    const [Detail, setDetail] = useState([])

    const { Charactersid } = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${Charactersid}`)
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
                            <h1 className="card-title">Name: {Detail.name}</h1>
                            <p className="card-text">Age: {Detail.age}</p>
                            <p className="card-text">Gender: {Detail.gender}</p>
                            <p className="card-text">Eye Color: {Detail.eye_color}</p>
                            <p className="card-text">Hair Color: {Detail.hair_color}</p>
                            <p className="card-text">Species:<a href={`${Detail.species}`}>{`${Detail.species}`}</a></p>
                            <p className="card-text">Films in: <a href={`${Detail.films}`}>{`${Detail.films}`}</a></p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CharacterDetails