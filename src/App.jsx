import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Header from './pages/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Header/>}>

          </Route>

        </Routes>
        <Footer/>
      </div>

    </>
  )
}

export default App
