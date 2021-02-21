import React from 'react';

const CharacterDetails = ({character}) => {
    if(!character){
        return(null)
    }

const occupations = character.occupation.map((occupation) => {
    return occupation
}).join(" / ")

return(

    <>
    <div className = "character-container">
        <div>
            <h1>{character.name}</h1>
            <h3>AKA: {character.nickname}</h3>
            <p>Occupation(s): {occupations}</p>
            <img src ={character.img} height ="400"/>
            <h1>{character.status}</h1>
        </div>

    </div>
    </>

)




}

export default CharacterDetails;