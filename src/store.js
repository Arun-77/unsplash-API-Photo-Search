import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './Slices/SearchSlice';

const store = configureStore({
  reducer: { search: SearchReducer },
});

export default store;
