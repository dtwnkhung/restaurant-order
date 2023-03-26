
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slice/cartSlice';
import { phoneSlice } from './slice/phoneSlice';


const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  phone: phoneSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
