import React from 'react';

export default function EpisodeCard(props) {
  console.log(props)
  return (
    <div className="card">
      <h2>{props.episodes.name}</h2>
      <div className="info2">
      <h3>Aired: {props.episodes.air_date}</h3>
      <h3>{props.episodes.episode}</h3>
      <h3>Characters Involved: {props.episodes.characters.length}</h3>
      </div>
    </div>
  )
}
