import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <>
      {/* TS si sta lamentando che stiamo fornendo un oggetto props a questo
    ClassComponent formato da una prop che si chiama "title" con un valore
    di stringa, ma DI DEFAULT un componente non si aspetta di ricevere alcunché */}
      <ClassComponent title="TITOLO" />
    </>
  )
}

export default App
