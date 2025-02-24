import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getProducts } from '@/helper/utils/getData'
import ProductCard from '@/components/ProductCard'
import { productType } from '@/constants/type'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const HomeScreen = () => {
  // const [products, setProducts] = useState<productType[]>()
  const { products } = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts() as any)
  }, [])

  return (
    <View style={styles.container}>
      <ProductCard productsItem={products} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  }
})