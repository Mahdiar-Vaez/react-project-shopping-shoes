import React, { useEffect } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function Toast({type='success',massage='you login successfully'}) {
    useEffect(()=>{
        toast[type](massage)
          
    },[type,massage])
  return (
<ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
  )
}
