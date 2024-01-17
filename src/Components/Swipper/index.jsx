
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector ,useDispatch} from 'react-redux';
import { addItem,removeItem } from '../../Store/Slice/CartSlice';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css'


import { Navigation, Pagination } from 'swiper/modules';


  
export default function App({img,imgII,imgIII,name,price,id,product}) {
  const dispatch=useDispatch()
  const pr=useSelector(state=>state.cart.list).filter(e=>e.id==id)
  console.log(pr)
  const quantity=pr[0]?.quantity
  console.log(quantity)
   return (
    <>
   
      <Swiper
        dir="rtl"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div> <img src={'https://'+img} alt={name} /></div>
       
        </SwiperSlide>
        <SwiperSlide>   <div> <img src={'https://'+imgII} alt={name} /></div></SwiperSlide>
        <SwiperSlide>   <div> <img src={'https://'+imgIII} alt={name} /></div></SwiperSlide>
      </Swiper>
      <div className='text-content'>
      <h3>{name}</h3>
       
        <h4>{price}</h4>
        <div className='cart-btn'>
        <button className='btn btn-danger ' disabled={
          quantity?false:true
        } onClick={()=>dispatch(removeItem(product?.id))}>-</button>
        {quantity&&<span>{quantity}</span>}
        <button className='btn btn-success ' onClick={()=>dispatch(addItem(product))}>+</button>
        </div>
       
        
      </div>
    </>
  );
}
