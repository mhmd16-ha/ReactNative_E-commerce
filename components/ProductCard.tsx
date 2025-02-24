import { FlatList, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { productType } from '@/constants/type'
import { S, vS } from '@/style/responsive'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Colors } from '@/style/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '@/store/cartSlice'
import {  ToggleWishList } from '@/store/wishListSlice'
import { RootState } from '@/store/store'

interface props {
    productsItem?: productType[]
}

const { width } = Dimensions.get('screen')
const CardWidth = (width / 2) - 20
const ProductCard: React.FC<props> = ({ productsItem }) => {
  const { WishListItems } = useSelector((state: RootState) => state.WishListItems)

    const dispatch = useDispatch()
    const handelAppToCart = (item: productType) => {
        dispatch(addItemToCart(item))
    }
    const handleWishListToggole = (item:productType) => {
        dispatch(ToggleWishList(item))
      }
    return (
        <>
            <FlatList
                data={productsItem}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.productCard}>
                        <Image source={{ uri: item.image }} style={styles.ProductImage} />
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                            <Text style={styles.priceText}>{item.price} $</Text>

                            <TouchableOpacity onPress={() => handelAppToCart(item)} style={styles.addToCart}>
                                <FontAwesome name='opencart' size={30} color={'white'} />
                                <Text style={{ color: 'white' }}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={()=>handleWishListToggole(item)} style={styles.heart}>
                          {WishListItems.find((i)=>i.id==item.id) ?<FontAwesome name='heart' size={20} color={Colors.Primary} />: <FontAwesome name='heart-o' size={20} color={Colors.Primary} />}
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            /></>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    productCard: {
        justifyContent: 'center',
        alignItems: 'center',
        width: CardWidth,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        borderRadius: 15,
        padding: 5,
        borderWidth: 1,
        gap: 10,
        borderColor: Colors.Primary
    },
    ProductImage: {
        width: S(120),
        height: S(120),
    },
    titleContainer: {
        backgroundColor: Colors.secondary,
        width: '100%',
        borderRadius: 10,
        gap: 10,
        padding: 5,
        fontSize: 17

    },
    title: {

    }
    , priceText: {
        fontSize: 20,
        fontWeight: '500',

    },
    heart: {
        width: S(32),
        height: vS(30)
        , backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .5,
        position: 'absolute',
        top: 10, right: 10,
        borderColor: Colors.Primary
    },
    addToCart: {
        borderRadius: 10,
        padding: 5,
        backgroundColor: Colors.Primary,
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})