import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard.js';
import axios from 'axios';

export default function EpisodeList(props) {
  const [episode, setEpisode] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => { console.log(res.data)
            setEpisode(res.data.results)})
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='character-list grid-view'>
      <h2>{episode.map(item => {
        return <EpisodeCard episodes={item}/>
      })}</h2>
    </section>
)
}
