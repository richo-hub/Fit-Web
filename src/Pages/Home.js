import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import SearchExercise from '../Component/SearchExercise'
import HeroBanner from '../Component/HeroBanner'
import Exercises from '../Component/Exercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise/>
      <Exercises/>
    </Box>
  )
}

export default Home