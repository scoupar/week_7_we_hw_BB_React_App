import React from 'react';


const CharacterList = ({characters, onCharacterSelect}) => {

    const characterListItems = characters.map((character) => {
        return(
            <li onClick={()=>{onCharacterSelect(character)}}key ={character.id}>{character.name}</li>
            
        )
    })


    return(
        <>  
        <div className = "character-list">
        <ul> 
            {characterListItems}
        </ul>
        </div>
        </>
    )

}

export default CharacterList;