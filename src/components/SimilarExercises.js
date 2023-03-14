import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ( { targetMuscleExercise,equipmentExercises }) => {
  return (
    <Box sx={{mt : { lg: '100px', xs:'0' } }}>
      <Typography variant='h3'>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' mt='25px' sx={{p: '2', position:'relative'}}>
        {targetMuscleExercise.length ? <HorizontalScrollbar data={targetMuscleExercise} /> : <Loader/> }
      </Stack>
      <Typography variant='h3'>
        Exercises that use the same Equipment
      </Typography>
      <Stack direction='row' mt='25px' sx={{p: '2', position:'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader/> }
      </Stack>
    </Box>
  )
}

export default SimilarExercises