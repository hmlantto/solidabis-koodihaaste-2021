import React from 'react'

const Car = ({car, handleClick}) => {
  return (
    <button value={car.fuel} onClick={handleClick}>{car.fuel} l/100 km</button>
  )
}

export default Car