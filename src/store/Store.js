import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './features/ProductSlice';

const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});

export default store;
