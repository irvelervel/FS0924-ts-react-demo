import { useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

interface FuncComponentProps {
  title: string
  counter?: number
}

interface Movie {
  title: string
  year: number
  id: number
}

const initialMovie: Movie = {
  title: '',
  year: 0,
  id: 0,
}

const FuncComponent = function (props: FuncComponentProps) {
  const [show, setShow] = useState(false)
  const [movieObject, setMovieObject] = useState<Movie>(initialMovie)

  useEffect(() => {
    console.log('MOUNTING')
    setMovieObject({
      title: 'BATMAN',
      year: 1960,
      id: 123123,
    })
    // setMovieObject(null)
  }, [])

  return (
    <div>
      <h2>COMPONENTE A FUNZIONE!</h2>
      <h3>Il valore della prop è: {props.title.toLowerCase()}</h3>
      <h3>
        Il calore di counter è:{' '}
        {/* {props.counter ? props.counter.toFixed(2) : undefined} */}
        {props.counter?.toFixed(2)}
      </h3>
      <Button
        variant="success"
        onClick={() => {
          setShow(!show)
        }}
      >
        TOGGLE
      </Button>
      {show && <Alert variant="info">SHOW È TRUE</Alert>}
      <div>
        <h4>{movieObject.title}</h4>
      </div>
    </div>
  )
}

export default FuncComponent
