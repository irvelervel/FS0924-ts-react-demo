import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Result } from '../types/Movie'
import SingleMovie from './SingleMovie'

const MovieGallery = function () {
  // MovieGallery contatterà nuovamente OMDbAPI però richiederà
  // un ELENCO di film! con il parametro "s"

  // https://www.omdbapi.com/?apikey=24ad60e9&s=Interstellar
  const [results, setResults] = useState<Result[]>([])

  const getResults = async () => {
    try {
      const response = await fetch(
        'https://www.omdbapi.com/?apikey=24ad60e9&s=Interstellar'
      )
      if (response.ok) {
        const data = await response.json()
        setResults(data.Search)
      } else {
        throw new Error('errore nel recupero dei film')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getResults()
  }, [])

  return (
    <div>
      <h2>MOVIEGALLERY</h2>
      <Container>
        <Row className="justify-content-center">
          {results.map((result) => {
            return <SingleMovie result={result} />
          })}
        </Row>
      </Container>
    </div>
  )
}

export default MovieGallery
