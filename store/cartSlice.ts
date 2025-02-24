import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {productType} from '../constants/type'


export interface cartState {
    items: productType[]
}


const initialState: cartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart:(state,action:PayloadAction<productType>)=>{
      let isExisted= state.items.find((item)=>item.id==action.payload.id)
      if(isExisted){
        isExisted.quantity += 1;
        isExisted.sumPrice = Number(isExisted.sumPrice) + Number(action.payload?.price);
      }else{
        state.items.push({
          ...action.payload,
          quantity: 1,
          sumPrice: Number(action.payload?.price)
        });
      }
       
    },
    removeItemFromCart:(state,action:PayloadAction<productType>)=>{
      let isExisted= state.items.find((item)=>item.id==action.payload.id)
      if(isExisted && isExisted.quantity !== 1){
        isExisted.quantity -= 1;
        isExisted.sumPrice = Number(isExisted.sumPrice) - Number(action.payload?.price);
      }else{
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
       
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItemToCart,removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer