import { createReducer } from "@reduxjs/toolkit";

const initialState={
    c:0,
    country:null,
    role:null,
    email:null,
    fname:null,
    sname:null,
};
export const customReducer =createReducer(initialState,{

increament:(state)=>{
    state.c += 1;
},
decrement:(state)=>{
    state.c -=1;
} ,      
setcountry:(state,action)=>{
    state.country= action.payload;
},
setrole:(state,action)=>{
    
    state.role = action.payload;
},  
setemail:(state,action)=>{
    
    state.email = action.payload;
} , 
setfname:(state,action)=>{
    
    state.fname = action.payload;
},  
setsname:(state,action)=>{
    
    state.sname = action.payload;
} ,

})