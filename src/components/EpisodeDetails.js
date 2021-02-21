import React from 'react';

const EpisodeDetails = ({episode}) => {
    if(!episode){
        return(null)
    }

    const characters = episode.characters.map((character) => {
        return character
    }).join("  / ")

    return(
        <>
        <div className="episode-details">
            <h1>{episode.title}</h1>
            <h2>Season: {episode.season}</h2>
            <h2>Air date: {episode.air_date}</h2>
            <h2>Featured Characters:</h2>
            <ul className = "featured-characters">
                <li>{characters}</li>
            </ul>

        </div>
        </>
    )
}

export default EpisodeDetails;