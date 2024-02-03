import { Box, TextField, Typography,Button } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

export default function Register({handlePageType}) {
  return (
    <motion.div initial={
      {
        x:-400,
       
        opacity:0,


      }
      
    }
    animate={{
      x:0,

      opacity:1,
      
    }}
    transition={{
      duration:.5,
      ease:'easeIn'
    }} style={
      {
        background:
        "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
        width:'100%',
        height:'1000px',
        padding:'20px 5%',
        display:'flex',
        flexDirection:'column',
        gap:'20px'
        ,alignItems:'center',
        justifyContent:'space-evenly',
    
        textAlign:'center'
      }
    }>
    <Box  sx={{
            borderRadius: {
              xs:5,
              sm:10,
              md:30
            },
            backgroundColor: "rgba(18,18,18,.7)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",

            justifyContent: "space-around",
            width: {
              xs:300,
              sm:350,
              md:600,
              lg:1200
            },
            textAlign: "center",
          }}
          height={600}>
      <Typography variant='h3'  color={'secondary'}>pls Register </Typography>
      <TextField sx={{
        color:'white'
      }}  size='medium'  label='enter your userName' variant='outlined' color='success' />
      <TextField size='medium'   variant='filled' color='success' label='enter your password'/>
      <Button variant='contained' color='secondary' >Submit</Button>
      <h3 style={{
        color:'white',
        cursor:'pointer',
      
      }} onClick={handlePageType}> you've already have an account? let's Login</h3>
    </Box>
    </motion.div>
  )
}
