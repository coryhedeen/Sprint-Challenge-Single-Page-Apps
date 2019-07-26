import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => { return console.log(res.data.results)
            setCharacter(res.data.results)})
      .catch(err => console.log(err))
  }, [character])

  return (
    <section className='character-list grid-view'>
      <h2>{character.map(item => {
        return <CharacterCard character={item}/>
      })}</h2>
    </section>
)
}
