import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard.js';
import axios from 'axios';

export default function LocationsList(props) {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/locations/")
      .then(res => { return console.log(res.data.results)
            setLocation(res.data.results)})
      .catch(err => console.log(err))
  }, [location])

  return (
    <section className='character-list grid-view'>
      <h2>{location.map(item => {
        return <LocationCard location={item}/>
      })}</h2>
    </section>
)
}
