import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={}>
            <Route index element={} />
            <Route path=':id'element={}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
