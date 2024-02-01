import {  configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./Slice/Cartslice";
const store=configureStore({
    reducer:{
        cart:CartSliceReducer
    }
})
export default store