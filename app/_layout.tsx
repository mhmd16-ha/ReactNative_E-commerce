import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { store } from '../store/store'
import { Provider } from 'react-redux'

const _layout = () => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(tabs)' />
      </Stack>
    </Provider>
  )
}

export default _layout

const styles = StyleSheet.create({})