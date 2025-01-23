import { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Spinner } from 'react-bootstrap'
import { Movie } from '../types/Movie'

// https://www.omdbapi.com/?apikey=24ad60e9&i=tt15398776

const FetchComponent = function () {
  const [movieObject, setMovieObject] = useState<null | Movie>(null)

  const getMovieData = async () => {
    try {
      const response = await fetch(
        'https://www.omdbapi.com/?apikey=24ad60e9&i=tt15398776'
      )
      if (response.ok) {
        const data = await response.json()
        setMovieObject(data)
      } else {
        throw new Error('Errore nel recupero film')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return (
    <div>
      <h2>CHIAMATA A OMDb API</h2>
      {!movieObject && <Spinner animation="border" variant="warning" />}
      {movieObject && (
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <Card>
                <Card.Img variant="top" src={movieObject.Poster} />
                <Card.Body>
                  <Card.Title>{movieObject.Title}</Card.Title>
                  <Card.Text>
                    {movieObject.Director} - {movieObject.Year}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  )
}

export default FetchComponent
