import { Box, Typography } from '@mui/material'
import React from 'react'

export default function PageNotFound() {
  return (
    <Box  height={800} sx={{
      backgroundColor:'rgb(18,18,18)',
      display:'flex',
      flexDirection:'column',
      gap:'20px',
      justifyContent:'center',alignItems:'center',
      marginTop:{
        xs:10
      }
    }} > 
    <Typography sx={{
      fontSize:{
        xs:40,
        sm:50,
      }
    }} fontFamily={'fantasy'} color={'secondary'} variant='h1'>
      Page Not Found
    </Typography>
      <Box  sx={{
        width:{
          xs:300,
          sm:400,
          md:600,
          lg:800,
          xl:1000
        }
      }} component={'img'} 
      
      src='assets/3_files/giphy.gif'/>
    </Box>
   
  )
}
