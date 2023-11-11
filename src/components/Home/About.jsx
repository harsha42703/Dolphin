import {Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container id='About'>
      <Typography  className='first-title' component='h6' sx={{textAlign:'start'}} variant='h6'>About</Typography>
      <Typography className='second-title' component='h4' sx={{textAlign:'start'}} variant='h4'>Welcome to Dolphin</Typography>
      <Typography component='p'>Founded with a passion for gastronomy and a commitment to excellence, Dolphin Food Restaurant is the brainchild of a team of seasoned chefs and food enthusiasts. Drawing inspiration from the boundless depths of the ocean, our menu is a testament to the freshest, highest-quality ingredients sourced from local providers.</Typography>
    </Container>
  )
}

export default About;