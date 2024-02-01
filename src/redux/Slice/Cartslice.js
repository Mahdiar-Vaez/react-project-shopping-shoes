import { createSlice } from "@reduxjs/toolkit";
const initialState={
     list:[]
}
const cartSlice=createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        removeAll:(state)=>{
            state.list=[]
        },
        removeItem:(state,action)=>{
            state.list=state.list.filter((e)=>{
                if(e.id===action.payload){
                    let pr=e
                    pr.quantity=pr.quantity-1
                    if(pr.quantity===0){
                        return false
                    }
                   return pr
                }
                return true
            })
        },
        addItem:(state,action)=>{
            let add=false
            if(state.list.length===0){
                let product=action.payload
                product.quantity=1
                state.list.push(product)
                add =true

            }else{
                state.list=state.list.map(e=>{
                    if(e.id===action.payload.id){
                        e.quantity=e.quantity+1
                        add= true
                        return e
                    }
                    return e  
                })
                if(!add){
                    let product=action.payload
                    product.quantity=1
                    state.list.push(product)
                }
            }

        }
    }
})
export default cartSlice.reducer
export const {removeAll,addItem,removeItem}=cartSlice.actions