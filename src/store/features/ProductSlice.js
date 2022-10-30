import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  loading: false,
  error: '',
};

const ProductSlice = createSlice({
  initialState,
  name: 'product',
  reducers: {
    addProduct: (state, { payload }) => {
      state.product = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        // Add any fetched posts to the array
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.loading = false;
        // state.error = action.error.message;
      });
  },
});

export const getProducts = createAsyncThunk('get/products', async () => {
  try {
    const res = await axios.get('http://127.0.0.1:5000/products');
    return res.data;
  } catch (error) {
    console.error(error);
  }
});

export default ProductSlice.reducer;
