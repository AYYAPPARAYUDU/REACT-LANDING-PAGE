import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes} from 'react-router-dom'
import Wholepage from './Wholepage'



function App() {
  

  return (
    <>
      <Navbar />
      <Wholepage />


    </>
  )
}

export default App
