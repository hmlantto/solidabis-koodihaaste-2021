import React, { useState } from 'react'
import Comparison from './components/Comparison'
import InputTable from './components/InputTable'

const App = ( { cars } ) => {
  const [ fuelConsumption, setFuelConsumption ] = useState( 0 )
  const [ distance, setDistance ] = useState( 0 )
  const [ speed1, setSpeed1 ] = useState( 0 )
  const [ speed2, setSpeed2 ] = useState( 0 )

  const chooseCar = ( event ) => setFuelConsumption( event.target.value )
  
  const inputDistance = ( event ) => {
    let value = parseInt( event.target.value )
    if ( value < 0 || !value ) {
      value = 0
    }
    setDistance( value )
  }
  
  const inputSpeed1 = ( event ) => {
    let value = parseInt( event.target.value )
    if ( value < 0 || !value ) {
      value = 0
    }
    setSpeed1( value )
  }

  const inputSpeed2 = ( event ) => {
    let value = parseInt( event.target.value )
    if ( value < 0 || !value ) {
      value = 0
    }
    setSpeed2( value )
  }

  return (
  <div>
    <InputTable cars={cars}
                chooseCar={chooseCar}
                inputDistance={inputDistance}
                inputSpeed1={inputSpeed1}
                inputSpeed2={inputSpeed2} />
    <Comparison fuel={fuelConsumption}
                distance={distance}
                speed1={speed1}
                speed2={speed2} />
  </div>
  )
}

export default App
