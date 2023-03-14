// 1.12
import React from 'react'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl:'1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetails />}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App  