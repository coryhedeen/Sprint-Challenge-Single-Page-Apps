import React from 'react'

export default function CharacterCard (props) {
  console.log(props)
  return (
    <div className="card">
      <img src={props.character.image} alt="R&M character"/>
      <div className="info">
        <h2>{props.character.name}</h2>
        <h4>Status: {props.character.status}</h4>
        <h4>Species: {props.character.species}</h4>
        <h4>Gender: {props.character.gender}</h4>
      </div>
    </div>
  )
}
