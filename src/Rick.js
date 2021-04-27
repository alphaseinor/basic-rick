import React from 'react'

const Rick = (rick) => {
    
    console.log(rick)


    return (
        <article>
            <h2>{rick.name}</h2>
            <img src={rick.image} alt="rick" />
            <p>{rick.name} is a {rick.gender} {rick.species} who is {rick.status}</p>
        </article>
    )
}

export default Rick