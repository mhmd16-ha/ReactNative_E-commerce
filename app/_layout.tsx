import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { NotificationProvider } from '@/context/NotificationContext'
import * as Notifications from 'expo-notifications';

 Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  
const _layout = () => {
  return (
    <NotificationProvider>
      <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(tabs)' />
      </Stack>
    </Provider>
    </NotificationProvider>
  )
}

export default _layout

const styles = StyleSheet.create({})