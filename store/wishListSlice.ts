import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {productType} from '../constants/type'

export interface WishListState {
    WishListItems: productType[]
}


const initialState:WishListState = {
    WishListItems:[],
}

export const WishListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   ToggleWishList:(state,action:PayloadAction<productType>)=>{
        const item = state.WishListItems.find((item:productType)=>item.id === action.payload.id)
        if(item){
            state.WishListItems=state.WishListItems.filter((item:productType)=>item.id!==action.payload.id)
        }else{
            state.WishListItems.push(action.payload)
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {  ToggleWishList} = WishListSlice.actions

export default WishListSlice.reducer