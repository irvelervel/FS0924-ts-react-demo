import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormExample from './components/FormExample'
import FuncComponent from './components/FuncComponent'
import ClassComponent from './components/ClassComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageChooser from './components/PageChooser'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* TS si sta lamentando che stiamo fornendo un oggetto props a questo
    ClassComponent formato da una prop che si chiama "title" con un valore
    di stringa, ma DI DEFAULT un componente non si aspetta di ricevere alcunché */}
        {/* <ClassComponent title="TITOLO" />
      <ClassComponent title="TITOLO 2" counter={10} /> */}
        {/* <FuncComponent title="TITOLO" counter={100} /> */}
        <PageChooser />
        <Routes>
          <Route path="/" element={<></>} />
          <Route
            path="/class"
            element={<ClassComponent title="TITOLO 2" counter={10} />}
          />
          <Route
            path="/func"
            element={<FuncComponent title="TITOLO 2" counter={10} />}
          />
          <Route path="/form" element={<FormExample />} />
          <Route path="/fetch" element={<></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
