import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import SearchExercise from '../Component/SearchExercise'
import HeroBanner from '../Component/HeroBanner'
import Exercises from '../Component/Exercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercise 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home