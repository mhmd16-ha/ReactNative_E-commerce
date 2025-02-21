import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts= createAsyncThunk (
    "getProducts",
    async()=>{
    const {data}=await axios.get('https://fakestoreapi.com/products')
     return data
  })