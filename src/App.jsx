import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';

function App() {
return  (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>

</Routes>
</BrowserRouter>
  )
}

export default App
