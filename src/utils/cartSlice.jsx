import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            let itemArray=state.items.filter((item)=>item.id != action.payload)
            state.items=itemArray;
        },
        clearCart: (state)=>{
            state.items=[];
        }
    }
})

export const { addItem, removeItem, clearCart }=CartSlice.actions
export default CartSlice.reducer