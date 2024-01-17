import React, { createRef, useEffect, useRef, useState } from 'react'
import Swipper from '../../Components/Swipper'
import {  useParams } from 'react-router-dom'

export default function ProductDetails() {
  const divEl=useRef()
  const [product,setProduct]=useState()
  const {id}=useParams()
  useEffect(()=>{
    fetch(`https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`,{
      method:'GET',
      headers:{
        
		'X-RapidAPI-Key': '8de00fcc82msh1a5fc2bed05e452p1a5212jsnb2271d0a1bed',
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      },
    })
    .then(res=>res.json())
    .then(data=>{
      setProduct(data)
      divEl.current.innerHTML=data.description
    })
  },[id])
  return (
  <>
  <Swipper product={product} id={id} name={product?.name} description={product?.description} img={product?.media?.images[0]?.url} imgII={product?.media?.images[1]?.url} imgIII={product?.media?.images[2]?.url} price={product?.price?.current?.text}/>
  <p style={{padding:'5px 10%'}} ref={divEl}></p>

  </>
  )
}
