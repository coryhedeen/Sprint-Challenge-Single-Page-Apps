import React from 'react'

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <div className="locationCard">
      <span>{name}</span>
      <span>{type}</span>
      <span>{dimension}</span>
      <span>{residents}</span>
    </div>
  )
}
