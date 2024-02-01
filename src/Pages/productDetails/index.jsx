import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swipper from '../../Components/Swipper'
import { Box } from '@mui/material'
export default function ProductDetails() {
  const {id}=useParams()
  const [product,setProduct]=useState()
  useEffect(()=>{
    fetch(`https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`,{
      
    headers:{ 
           'X-RapidAPI-Key': '8de00fcc82msh1a5fc2bed05e452p1a5212jsnb2271d0a1bed',
      'X-RapidAPI-Host': 'asos2.p.rapidapi.com'}

    })
    .then(res=>res.json())
    .then(data=>{setProduct(data)
    console.log(data)
    })
    .catch(err=>alert(err))

  },[id])
  return (
    <Box height={1000}>
    <Swipper product={product} name={product?.name} id={product?.id} brandName={product?.brand?.name} price={product?.price?.current?.text} description={product?.brand?.description} img={product?.media?.images[0]?.url} imgII={product?.media?.images[1]?.url} imgIII={product?.media?.images[2]?.url}/>
    </Box>
  )
}
