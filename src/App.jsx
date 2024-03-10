import { Route, Routes } from 'react-router-dom'
import './App.css'
import Element from './component/Element/Element'
import Home from './component/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<Element />} >
        <Route  path="/" element={<Home />} /> 
        <Route  path="/about" element={<About />} /> 
        <Route  path="/contact" element={<Contact />} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
