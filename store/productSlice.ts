import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {productType} from '../constants/type'
import { getProducts } from '@/helper/utils/getData'


export interface cartState {
    products: productType[]
}


const initialState = {
    products:[],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
      builder.addCase(getProducts.fulfilled,(state,action)=>{
        state.products=action.payload
      })
  },
})

// Action creators are generated for each case reducer function
// export const {  } = productSlice.actions

export default productSlice.reducer