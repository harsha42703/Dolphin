import React from 'react'
import {Box,Typography} from '@mui/material'
import './footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <Box className='footer'>
        <Typography component='p'>
            Copyright ©2023 All rights reserved || Developed by <Link to="https://www.linkedin.com/in/harsha-vardhan-majji-45b51b230/" target='_blank'>Harsha Vardhan</Link></Typography>
    </Box>
  )
}

export default Footer