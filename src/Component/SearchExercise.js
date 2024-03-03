import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../Util/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercise = () => {
  const [search, setSearch] = useState(' ');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExerciseData();
  }, [])
  

  const HandleSearch = async() => {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const SearchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(SearchedExercises);
    }
  }

  
  return (
    <Stack alignItems="center" mt="37px" p="20px" justifyContent="center">
      <Typography fontWeight={700} sx={{ fontSize:{lg: '44px', xs: '30px'}}} mb="50px" textAlign="center">
        Awesome exercises you <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField sx={{ input: {fontWeight:'700', border: 'none', borderRadius:'4px'}, width:{lg:'1170px', xs: '350px'}, 
        backgroundColor:'#fff', borderRadius:'40px'}} type='text' placeholder='search exercise' height="76px" 
          value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button className='search-btn' sx={{
          bgcolor:"#ff2625", color:'#fff', position:'absolute', textTransform:'none', height:'56px', 
          width:{ lg:'175px', xs:'80px'}, fontSize:{ lg:'20px', xs: '14px' }, right:'0'
        }} onClick={HandleSearch}>search</Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollBar data={bodyParts}/>
      </Box>
    </Stack>
  )
}

export default SearchExercise