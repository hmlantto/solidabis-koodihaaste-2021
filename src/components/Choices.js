import React from 'react'
import Table from 'react-bootstrap/Table'

const Choices = ( props ) => {
  const { fuel, distance } = props

  return (
    <Table>
      <tbody>
        <tr>
          <th>Valittu bensankulutus</th>
          <td>{fuel} l/100 km</td>
        </tr>
        <tr>
          <th>Etäisyys</th>
          <td>{distance} km</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Choices