import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import './homePage.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <Box className='content'>
      <Typography component='h6' variant='h6' className='typo'>Savor Flavors</Typography>
      <Typography component='h2' variant='h2'>Wonderful Dining with Delightful Cuisine</Typography>
      <Typography component='p'>Every Bite Narrates a Delicious Tale!</Typography>
      <Link to='/booking'>
      <Button  type='button' sx={{backgroundColor:'rgba(135, 206, 250, 0.2)'}}>Book Table Now</Button>
      </Link>
    </Box>
  )
}

export default Home;