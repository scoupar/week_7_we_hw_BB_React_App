import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import CharacterDetails from '../components/CharacterDetails';
import EpisodeList from '../components/EpisodeList';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import EpisodeDetails from '../components/EpisodeDetails';

const CharacterContainer = () => {

    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    const [episodes, setEpisodes] = useState([])
    const [selectedEpisode, setSelectedEpisode] = useState(null)
    
    const getEpisodes = () => {
        fetch ("https://breakingbadapi.com/api/episodes")
        .then(res => res.json())
        .then(data => setEpisodes(data))
    }


    const getCharacters = () => {
        fetch("https://www.breakingbadapi.com/api/characters")
        .then(res => res.json())
        .then(data => setCharacters(data))
    }

    
    useEffect(() => {
        getCharacters()
    }, [])

    useEffect(() => {
        getEpisodes()
    }, [])
    
    const handleSelectedCharacter = (character) => {   
        setSelectedCharacter(character)

    }

    const handleSelectedEpisode = (event) => {
        setSelectedEpisode(episodes[event.target.value]);
    }

    return(
        <Router>
        <>
        <h1>Breaking Bad</h1>
        <NavBar />
        <Switch>
        <Route exact path ="/" component={Home}/>
        <Route path = "/characters" render ={() =>
            <>
                <CharacterDetails character ={selectedCharacter}/>
                <CharacterList characters ={characters} onCharacterSelect = {handleSelectedCharacter}/>
                
            </>
        }/>
        <Route path ="/episodes" render = {() => 
            <>
            <EpisodeList episodes = {episodes} onEpisodeSelect = {handleSelectedEpisode}/>
            <EpisodeDetails episode = {selectedEpisode}/>
            </>
        }/>
        </Switch>
        </>
        </Router>
    )   


}

export default CharacterContainer;