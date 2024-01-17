import React, { useState } from 'react'
import AuthContext from './utils/AuthContext'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import LoginRegister from './Pages/LoginRegister'
import ProductDetails from './Pages/productDetails'
import PageNotFound from './Pages/404'
import Contact from './Pages/Contact/Contact'
export default function App() {
  const [token,setToken]=useState('sfdgt')
  const handleToken=(x)=>{
    setToken(x)
  }
  return (
    <>
     <AuthContext.Provider value={{token,handleToken}}>
       <Navbar/>
 
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login-register' element={token?<Navigate to={'/'}/>:<LoginRegister/>} />
        <Route path='/product-details/:id/:name' element={token?<ProductDetails/>:<Navigate to={'/login-register'}/>}/>
        <Route path='*'  element={<PageNotFound/>}/>
        </Routes>
       
       
       <Footer/>
    </AuthContext.Provider>
  
    </>
   
   
  )
}
