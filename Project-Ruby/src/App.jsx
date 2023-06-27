import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import Carousel from './Carousel';
import { placeholders } from './assets/images';
import About from './About';


function App() {
 

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<Carousel/>} />
            <Route path='About'element={<About/>}/>
            <Route path='Members/:name'element={<About/>}/>
            <Route path='Projects/:title'element={<About/>}/>
          </Route>
            <Route path='/Gallery'element={<Carousel slides={placeholders} />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
