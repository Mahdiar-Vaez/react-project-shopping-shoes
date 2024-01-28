import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import './style.css'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

export default function Products() {
  const [products,setProducts]=useState()
  useEffect(()=>{
    fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US',{
  
    headers:{
        'X-RapidAPI-Key': '8de00fcc82msh1a5fc2bed05e452p1a5212jsnb2271d0a1bed',
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      setProducts(data.products)
    })
  },[])
  const items=products?.map((e,index)=>{
    return <Card   sx={{ maxWidth: 345,
      background:
      "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
    padding:'20px'}}>
    <CardActionArea >
      <CardMedia key={index}
        component="img"
        height="350"
        image={"https://"+e?.imageUrl}
        alt={e?.brandName}
      />
      <CardContent>
        <Typography color={'white'} gutterBottom variant="h5" component="div">
          {e?.name}
        </Typography>
        <Typography  color={'white'} variant="body2">
       {e?.description}
        </Typography>
        <span>
          {e?.price?.current?.text}
        </span>
        <br/>
        <span >
          {e?.colour}
        </span>
      </CardContent>
    </CardActionArea>
  </Card>
  })
  return (
    <Box  sx={{
      
      marginTop:'10px',
      backgroundColor:'rgb(18,18,18)',
      padding:'20px 5%',
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'space-between',
      alignItems:"center",
      gap:'30px',
      width:'100%',
      height:'max-content'
    }}>
    {items}
   
    </Box>
  )
}
