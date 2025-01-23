import { Card, Col } from 'react-bootstrap'
import { Result } from '../types/Movie'

// SingleMovie riceve una prop, "result". Questa prop ha un tipo di Result

interface SingleMovieProps {
  result: Result
}

const SingleMovie = (props: SingleMovieProps) => {
  return (
    <Col xs={12} md={4} key={props.result.imdbID}>
      <Card>
        <Card.Img variant="top" src={props.result.Poster} />
        <Card.Body>
          <Card.Title>{props.result.Title}</Card.Title>
          <Card.Text>{props.result.Year}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleMovie
