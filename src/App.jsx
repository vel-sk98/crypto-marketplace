
import './App.css'

import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import {Home} from './Pages/Home/Home'
import {Features} from './Pages/Features'
import {Pricing} from './Pages/Pricing'
import { Blog } from './Pages/Blog'
import Coin from './Pages/Coin/Coin'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='container'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
