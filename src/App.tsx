import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormExample from './components/FormExample'
// import FuncComponent from './components/FuncComponent'
// import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <>
      {/* TS si sta lamentando che stiamo fornendo un oggetto props a questo
    ClassComponent formato da una prop che si chiama "title" con un valore
    di stringa, ma DI DEFAULT un componente non si aspetta di ricevere alcunché */}
      {/* <ClassComponent title="TITOLO" />
      <ClassComponent title="TITOLO 2" counter={10} /> */}
      {/* <FuncComponent title="TITOLO" counter={100} /> */}
      <FormExample />
    </>
  )
}

export default App
