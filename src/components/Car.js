import React from 'react'
import Form from 'react-bootstrap/Form'

const Car = ({car, chooseCar}) => {
  return (
    <Form.Check
                type="radio"
                name="fuel-consumption"
                id={`car-${car.id}`}
                value={car.fuel}
                onChange={chooseCar}
                label={`${car.fuel} l/100 km`} />
  )
}

export default Car