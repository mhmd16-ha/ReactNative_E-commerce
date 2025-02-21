import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import ProductCard from '@/components/ProductCard'
import { Colors } from '@/style/Colors'
import { S } from '@/style/responsive'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { addItemToCart, removeItemFromCart } from '@/store/cartSlice'
import { productType } from '@/constants/type'

type Props = {}
const width = Dimensions.get('screen').width - 10
const Cart = (props: Props) => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const TotalPrice = items.reduce((total, num) => total + num.sumPrice, 0)
  const handelAppToCart = (item: productType) => {
    dispatch(addItemToCart(item))
  }
  const handelRemoveFromCart = (item: productType) => {
    dispatch(removeItemFromCart(item))
  }
  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={({ item }) => (
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.tiltleContainer}>
            <Text style={styles.tiltle}>{item?.title}</Text>
            <Text style={styles.price}>{item?.sumPrice.toFixed(2)}$</Text>
            <View style={styles.ratingGroup}>
              <Text style={styles.rating}>{item?.rating.rate}</Text>
              <FontAwesome name='star' color={'gold'} />
            </View>
          </View>
          <View style={styles.cartQuantity}>
            <TouchableOpacity onPress={() => handelAppToCart(item)}>
              <Text style={{ fontSize: 30, color: Colors.Primary }}>+</Text>
            </TouchableOpacity>

            <Text style={styles.quantity}>{item?.quantity}</Text>
            <TouchableOpacity onPress={() => handelRemoveFromCart(item)}>
              <Text style={{ fontSize: 30, color: Colors.Primary }}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      )} />
      <View style={styles.checkOutButtomContainer}>
        <Text style={{ fontSize: 20 }}>Total : <Text style={{ fontWeight: 'bold', color: Colors.Primary }}>{TotalPrice.toFixed(2)}$</Text></Text>
        <TouchableOpacity style={styles.checkOutButtom}>
          <Text style={styles.buttomText}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  card: {
    width: width,
    backgroundColor: Colors.secondary,
    marginTop: 10,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space-between',
    gap: 15
  },
  image: {
    width: S(80),
    height: S(100),
    borderRadius: 15
  },
  tiltle: {
    fontSize: 15,
    fontWeight: '500',
  },
  quantity: {
    fontSize: 25,
    color: Colors.Primary

  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.Primary
  },
  tiltleContainer: {
    width: '50%'
  },
  cartQuantity: {
    borderWidth: .5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
  },
  ratingGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  rating: {
    fontSize: 13,
    fontWeight: '500'
  },
  checkOutButtomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: 'white'
  },
  checkOutButtom: {
    backgroundColor: Colors.Primary,
    padding: 10,
    borderRadius: 10

  },
  buttomText: {
    color: 'white'
  }
})