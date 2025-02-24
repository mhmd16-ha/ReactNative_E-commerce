import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/style/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const _layout = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const { WishListItems } = useSelector((state: RootState) => state.WishListItems)
  return (
   <Tabs screenOptions={{headerShown:false}}>
    <Tabs.Screen name='index' options={{
        title:'Home',
        tabBarActiveTintColor:Colors.Primary,
        tabBarIcon:({color,size})=>{
           return <AntDesign name='home' size={size} color={color}/>
        },
        
    }}/>
    <Tabs.Screen name='Cart'options={{
        tabBarActiveTintColor:Colors.Primary,
        tabBarBadge:items.length,
        title:'Cart',
        tabBarIcon:({color,size})=>{
           return <FontAwesome name='opencart' size={size} color={color}/>
        }
    }}/>
    <Tabs.Screen name='Favorite'options={{
        tabBarActiveTintColor:Colors.Primary,
        tabBarBadge:WishListItems.length,
        title:'Favorite',
        tabBarIcon:({color,size})=>{
           return <FontAwesome name='heart-o' size={size} color={color}/>
        }
    }}/>
   </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})