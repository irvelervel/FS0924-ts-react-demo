import { Component } from 'react'

// definiamo un'INTERFACCIA per le PROPS di questo componente

interface ClassComponentProps {
  // un'interfaccia che tipizza le PROP ricevute da ClassComponent
  title: string
  counter?: number
}

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <div>
        <h1>Componente a classe!</h1>
        <h3>Valore della prop: {this.props.title.toLowerCase()}</h3>
      </div>
    )
  }
}

export default ClassComponent
