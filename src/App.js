// Main component for the "Autoilumittari" app. Makes use of three other
// components: InputForm, Choices, and Comparison. InputForm renders
// the form that is used to collect information from the user. Choices
// displays the user's current input of fuel consumption and distance,
// and Comparison performs the calculations and displays the results.

import React, { useState } from 'react'
import Container   from 'react-bootstrap/Container'
import Row         from 'react-bootstrap/Row'
import Col         from 'react-bootstrap/Col'
import InputForm   from './components/InputForm'
import Choices     from './components/Choices'
import Comparison  from './components/Comparison'
import carsService from './services/cars'

const App = () => {
  const [ fuelConsumption , setFuelConsumption ] = useState( 0 )
  const [ distance        , setDistance        ] = useState( 0 )
  const [ speed1          , setSpeed1          ] = useState( 0 )
  const [ speed2          , setSpeed2          ] = useState( 0 )

  const cars = carsService.getAll()

  const chooseCar = ( event ) => {
    setFuelConsumption( parseInt( event.target.value ) )
  }

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
    if ( value > 200 ) {
      value = 200
    }
    setSpeed1( value )
  }

  const inputSpeed2 = ( event ) => {
    let value = parseInt( event.target.value )
    if ( value < 0 || !value ) {
      value = 0
    }
    if ( value > 200 ) {
      value = 200
    }
    setSpeed2( value )
  }

  return (
  <div className="main-div">
    <Container>
      <Row>
        <div className="header-div">
          <h1>Autoilumittari</h1>
        </div>
      </Row>

      <Row>
        <div className="instructions-div" >
            <p>Autoilumittarilla voit tarkastella, miten ajonopeuden muutos vaikuttaa matkustusaikaan ja bensankulutukseen. 
              Ajonopeuden yl??raja on 200 km/h. Laskuri p??ivittyy reaaliajassa.</p>
        </div>
      </Row>

      <Row>
        <Col md={5} className="input-col">
          <Row>
            <div className="input-div">
              <InputForm  cars={cars}
                          chooseCar={chooseCar}
                          inputDistance={inputDistance}
                          inputSpeed1={inputSpeed1}
                          inputSpeed2={inputSpeed2}
                          fuel={fuelConsumption} />
            </div>
          </Row>
        </Col>

        <Col md className="results-col">
          <div className="results-div">
            <Row>
              <div className="choices-div">
                <Choices    fuel={fuelConsumption}
                            distance={distance} />
              </div>
            </Row>
            
            <Row>
              <div className="comparison-div">
                <Comparison fuel={fuelConsumption}
                            distance={distance}
                            speed1={speed1}
                            speed2={speed2} />
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default App
