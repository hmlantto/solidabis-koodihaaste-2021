import React from 'react'

const Comparison = ( props ) => {
  const { fuel, distance, speed1, speed2 } = props
  const slope = 1.009

  const time1          = speed1 === 0 ? 0 : distance / speed1
  const time1Hours     = Math.floor( time1 )
  const time1Minutes   = Math.round( ( time1 - time1Hours ) * 60 )

  const time2          = speed2 === 0 ? 0 : distance / speed2
  const time2Hours     = Math.floor( time2 )
  const time2Minutes   = Math.round( ( time2 - time2Hours ) * 60 )

  const timeDifference = Math.abs( time2 - time1 )
  const diffHours      = Math.floor( timeDifference )
  const diffMinutes    = Math.round( ( timeDifference - diffHours ) * 60 )

  const totalFuel1     = speed1 === 0 ? 0 : ( Math.pow(slope, (speed1-1)) * fuel ).toFixed( 2 )
  const totalFuel2     = speed2 === 0 ? 0 : ( Math.pow(slope, (speed2-1)) * fuel ).toFixed( 2 )
  const fuelDifference = ( Math.abs( totalFuel2 - totalFuel1 ) ).toFixed( 2 )

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Auton bensankulutus</th>
            <td>{fuel} l/100 km</td>
          </tr>
          <tr>
            <th>Etäisyys</th>
            <td>{distance} km</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nopeus</th>
            <th>Matkustusaika</th>
            <th>Bensankulutus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{speed1} km/h</td>
            <td>{time1Hours} h {time1Minutes} min</td>
            <td>{totalFuel1} litraa</td>
          </tr>
          <tr>
            <td></td>
            <td>{speed2} km/h</td>
            <td>{time2Hours} h {time2Minutes} min</td>
            <td>{totalFuel2} litraa</td>
          </tr>
          <tr>
            <th>Ero</th>
            <td></td>
            <td>{diffHours} h {diffMinutes} min</td>
            <td>{fuelDifference} litraa</td>
          </tr>         
        </tbody>
      </table>
    </div>
  )
}

export default Comparison