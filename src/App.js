import React, { useState } from 'react'
import AuthContext from './utils/AuthContext'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import LoginRegister from './Pages/LoginRegister'
import ProductDetails from './Pages/productDetails'
import PageNotFound from './Pages/404'
import Cart from './Pages/Cart'
export default function App() {
  const [token,setToken]=useState('sfdgt')
  const handleToken=(x)=>{
    setToken(x)
  }
  return (
    <>
     <AuthContext.Provider value={{token,handleToken}}>
       <Navbar/>
       <main style={{minHeight:'80vh'}}>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>} />
        <Route path='/login-register' element={token?<Navigate to={'/'}/>:<LoginRegister/>} />
        <Route path='/product-details/:id/:name' element={token?<ProductDetails/>:<Navigate to={'/login-register'}/>}/>
        <Route path='/cart' element={token?<Cart/>:<Navigate to={'/login-register'}/>}/>
        <Route path='*'  element={<PageNotFound/>}/>
        </Routes>
       </main>
       
       <Footer/>
    </AuthContext.Provider>
  
    </>
   
   
  )
}
