import React from 'react'
import Car   from './Car'

const InputTable = (props) => {
  const { cars, chooseCar, inputDistance, inputSpeed1, inputSpeed2 } = props

  return (
    <table>
      <tbody>
        <tr>
          <th>Bensankulutus nopeudella 1 km/h</th>
          <td>{cars.map( car => <Car key={car.id} car={car} handleClick={chooseCar} /> )}</td>
        </tr>
        <tr>
          <th>Etäisyys (km)</th>
          <td><input id="distance" type="number" min="0" onInput={inputDistance}></input></td>
        </tr>
        <tr>
          <th>Nopeus 1 (km/h)</th>
          <td><input id="speed1" type="number" min="0" max="200" step="5" onInput={inputSpeed1}></input></td>
        </tr>
        <tr>
          <th>Nopeus 2 (km/h)</th>
          <td><input id="speed2" type="number" min="0" max="200" step="5" onInput={inputSpeed2}></input></td>
        </tr>
      </tbody>
    </table>
  )
}

export default InputTable