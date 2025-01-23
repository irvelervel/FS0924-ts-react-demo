import { FormEvent, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

interface Reservation {
  name: string
  phone: string
  numberOfPeople: number
  dateTime: string
  smoking: boolean
  specialRequests?: string
}

const initialReservation: Reservation = {
  name: '',
  phone: '',
  numberOfPeople: 1,
  dateTime: '',
  smoking: false,
  specialRequests: '',
}

const FormExample = function () {
  const [reservation, setReservation] =
    useState<Reservation>(initialReservation)

  // se volete definire separatamente un handler per l'onChange,
  // l'onSubmit e via così ricordatevi che il riferimento al tipo
  // della "e" (l'evento) non sopravvive! Dovete riassegnarlo a mano:
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation',
        {
          method: 'POST',
          body: JSON.stringify(reservation),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.ok) {
        // prenotazione salvata!
        alert('GRAZIE!')
        setReservation(initialReservation)
      } else {
        throw new Error("errore nell'invio prenotazione")
      }
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Il tuo nome"
                value={reservation.name}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    name: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Il tuo telefono"
                value={reservation.phone}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    phone: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quanti siete?</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={reservation.numberOfPeople}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    numberOfPeople: parseInt(e.target.value),
                  })
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quando</Form.Label>
              <Form.Control
                type="dateTime-local"
                value={reservation.dateTime}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    dateTime: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Tavolo fumatori?"
                checked={reservation.smoking}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    smoking: e.target.checked,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Richieste speciali</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={reservation.specialRequests}
                onChange={(e) => {
                  setReservation({
                    ...reservation,
                    specialRequests: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default FormExample
