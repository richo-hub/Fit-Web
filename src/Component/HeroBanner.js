import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material';
 import banner from '../Assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '150px', xs: '70px'}, ml: {sm: '50px'}}}>
        <Typography fontSize="26px" fontWeight="600" color="#ff2625">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
            Sweat, Smile <br />and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises.
        </Typography>
        <Button variant='contained' color='error' href='#exercises'>Explore exercises</Button>
        <Typography fontWeight={600} fontSize="200px" color="#ff2625" 
          sx={{opacity: 0.1, display:{lg: 'block', xs: 'none'}}}
        >
          Exercise
        </Typography>
        <img src={banner} alt="Banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner