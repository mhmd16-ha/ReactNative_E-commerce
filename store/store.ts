import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './cartSlice'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import productSlice from './productSlice';
import WishListSlice from './wishListSlice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};
const CartpersistedReducer = persistReducer(persistConfig, cartSlice);
const WishLisrpersistedReducer = persistReducer(persistConfig, WishListSlice);

export const store = configureStore({
  reducer: {
    cart:CartpersistedReducer,
    WishListItems:WishLisrpersistedReducer,
    products:productSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch