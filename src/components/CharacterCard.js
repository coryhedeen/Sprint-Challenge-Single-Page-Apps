import React from 'react'

export default function CharacterCard (props) {
  return (
    <div className="character-card">
      <span>{props.character.name}</span>
      <span>{props.character.status}</span>
      <span>{props.character.species}</span>
      <span>{props.character.type}</span>
    </div>
  )
}
