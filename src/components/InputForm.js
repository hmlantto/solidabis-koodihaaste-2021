import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Car from './Car'
import './../style.css'

const InputForm = (props) => {
  const { cars, chooseCar, inputDistance, inputSpeed1, inputSpeed2 } = props
  const mdColWidth = 5

  return (
    <Form>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Label md={mdColWidth}>
            Bensankulutus nopeudella 1 km/h
          </Form.Label>
          <Col md={mdColWidth}>
            {cars.map( car => <Car key={car.id} car={car} chooseCar={chooseCar} /> )}
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} controlId="distance">
        <Form.Label md={mdColWidth}>
          Etäisyys (km)
        </Form.Label>
        <Col md={mdColWidth}>
          <Form.Control as="input" type="number" min="0" onChange={inputDistance} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="speed1">
        <Form.Label md={mdColWidth}>
          Nopeus 1 (km/h)
        </Form.Label>
        <Col md={mdColWidth}>
          <Form.Control as="input" type="number" min="0" max="200" step="5" onChange={inputSpeed1} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="speed2">
        <Form.Label md={mdColWidth}>
          Nopeus 2 (km/h)
        </Form.Label>
        <Col md={mdColWidth}>
          <Form.Control as="input" type="number" min="0" max="200" step="5" onChange={inputSpeed2} />
        </Col>
      </Form.Group>
    </Form>
  )
}

export default InputForm