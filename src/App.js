import React from 'react'
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './Component/Navbar'
import Home from './Pages/Home';
import ExcersiceDetails from './Pages/ExcersiceDetails';
import Footer from './Component/Footer';

import './App.css';

const App = () => {
  return (
    <Box width= "400px" sx={{width: {xl: '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExcersiceDetails/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
