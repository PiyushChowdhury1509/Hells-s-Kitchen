import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:{
        userName:"",
        userEmail:""
    },
    reducers:{
        changeName:(state,action)=>{
            state.userName=action.payload;
        },
        changeEmail:(state,action)=>{
            state.userEmail=action.payload;
        }
    }
})

export const { changeName,changeEmail }=UserSlice.actions;
export default UserSlice.reducer;