import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Qualification from './component/Qualification';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
function App() {
return  (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/project' element={<Project/>}/>
  <Route path='/qualification' element={<Qualification/>}/>
  <Route path='/contact' element={<Contact/>}/>

</Routes>
</BrowserRouter>
  )
}

export default App
