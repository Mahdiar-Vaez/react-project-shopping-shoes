
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import { Box, Button, Typography } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { addItem } from '../../redux/Slice/Cartslice';

export default function Swipper({name,id,brandName,price,description,img,imgII,imgIII,product}) {
  const pr=useSelector(State=>State.cart.list).filter(e=>e.id==id)
  let quantity=pr[0]?.quantity
  const dispatch=useDispatch()
  const divDes=useRef()
  useEffect(()=>{
    description==undefined?
    divDes.current.innerHTML='...':
    divDes.current.innerHTML=`${description}`
  },[description])
    return (

    <div className='swiper-holder'>
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={'https://'+img} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"https://"+imgII} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"https://"+imgIII} />
      </SwiperSlide>
    </Swiper>
    <Box  height={700} sx={{
        padding:'10px',
        width:'100%'
    }}>
        <Typography color='primary' fontWeight={900} variant='h3'>
            {name}
        </Typography>
        <Typography color={'primary'} variant='subtitle1'>
            {brandName}
        </Typography>
        <div style={{
            visibility:description?'visible':'hidden',
            color:'white',
            textAlign:'center'
        }} ref={divDes} color={'primary'} variant='body2'>
           
        </div>
        <span id='price' >{price}</span>
        <div>
          <Button size='large' startIcon={<AddShoppingCartIcon fontSize='large'/>} onClick={()=>dispatch(addItem(product))} variant='contained' color='success' >{quantity}</Button>
        </div>
    </Box>
  </div>



  )
}


   