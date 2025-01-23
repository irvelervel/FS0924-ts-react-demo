import { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'

// definiamo un'INTERFACCIA per le PROPS di questo componente

interface ClassComponentProps {
  // un'interfaccia che tipizza le PROP ricevute da ClassComponent
  title: string
  counter?: number
}

interface ClassComponentState {
  show: boolean
  value: string
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    show: false,
    value: '',
  }

  render() {
    return (
      <div>
        <h1>Componente a classe!</h1>
        <h3>Valore della prop: {this.props.title.toLowerCase()}</h3>
        <Button
          variant="success"
          onClick={() => {
            this.setState({
              show: !this.state.show,
            })
          }}
        >
          TOGGLE
        </Button>
        {this.state.show && <Alert variant="primary">SHOW È TRUE!</Alert>}
      </div>
    )
  }
}

export default ClassComponent
