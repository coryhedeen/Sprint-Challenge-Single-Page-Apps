import React from 'react'

export default function LocationCard (props) {
  // image={image}
  return (
    <div className="card">
      <h2>{props.location.name}</h2>
      <div className="info2">
        <h3>Type: {props.location.type}</h3>
        <h3>Dimension: {props.location.dimension}</h3>
        <h3>Residents: {props.location.residents.length}</h3>
      </div>
    </div>
  )
}
