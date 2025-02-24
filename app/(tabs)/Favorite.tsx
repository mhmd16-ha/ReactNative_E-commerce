import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Colors } from '@/style/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { productType } from '@/constants/type'
import { RootState } from '@/store/store'
import { S } from '@/style/responsive'
const width = Dimensions.get('screen').width - 10
import {  ToggleWishList } from '@/store/wishListSlice'

const Favorite = () => {
  const { WishListItems } = useSelector((state: RootState) => state.WishListItems)
  const dispatch = useDispatch()
  // const TotalPrice = items.reduce((total, num) => total + num.sumPrice, 0)
  const handleWishListToggole = (item:productType) => {
    dispatch(ToggleWishList(item))
  }
  return (
    <View style={styles.container}>
      <FlatList data={WishListItems} renderItem={({ item }) => (
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.tiltleContainer}>
            <Text style={styles.tiltle}>{item?.title}</Text>
            <Text style={styles.price}>{Number(item?.price).toFixed(2)}$</Text>
            <View style={styles.ratingGroup}>
              <Text style={styles.rating}>{item?.rating.rate}</Text>
              <FontAwesome name='star' color={'gold'} />
            </View>
          </View>
          <TouchableOpacity onPress={()=>handleWishListToggole(item)}>
            <FontAwesome name='heart' color={'red'} size={35} />
          </TouchableOpacity>
        </View>
      )} />
    </View>
  )
}

export default Favorite


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