import React, {useState, useEffect} from 'react';

const Characters = () => {

    const [People, setPeople] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => {
                return res.json();
            })
            .then(allPeople => {
                setPeople(allPeople);
            })
    },[])
    return(
        <div className="row justify-content-center mt-5" id="people-container">
                    {People.map(person => (
                        <div className="col-md-6" key={`person-card-${person.id}`} >
                            <div className="card mt-2 shadow">
                                <div className="card-body">
                                    <h3 className="card-title">{`${person.name}`}</h3>
                                    <p className="card-text">{`${person.age}`}</p>
                                    <p className="card-text">{`${person.gender}`}</p>
                                    <p className="card-text d-inline">{`The film this person was in was `}</p>
                                    <a href={`${person.films[0]}`} className="d-inline">this</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
    )
}

export default Characters