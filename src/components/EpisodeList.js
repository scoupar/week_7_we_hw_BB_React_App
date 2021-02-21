import React from 'react';


const EpisodeList = ({episodes, onEpisodeSelect}) => {

    const episodeListItems = episodes.map((episode, index)=> {
        return(
            <option value ={index} key = {episode.episode_id}>{episode.title}</option>
        )
    })

    return(
        <>
        <div className= "episode-dropdown" onChange={onEpisodeSelect}>
            <select>
                {episodeListItems}
            </select>
                
        </div>
        </>
    )
}

export default EpisodeList;