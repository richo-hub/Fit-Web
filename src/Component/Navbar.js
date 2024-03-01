import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'


const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around'
      alignItems='center' sx={{gap: {sm: '122px', xs: '40px'}
      , mt: {sm: '32px', xs: '20px'},justifyContent: 'none'}} px="20px"
    >
      <Link to="/" style={{textDecoration:'none', fontWeight: 'bold', fontFamily:'sans-serif', color:'black'}}>
        <h1>Fit-Web</h1>
      </Link>
      <Stack direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{textDecoration: 'none', color: "#3A1212", borderBottom: '3px solid #ff2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: "#3A1212"}}>Exercise</a>
      </Stack>
    </Stack>
  )
}

export default Navbar