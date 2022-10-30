import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  loading: false,
  fetchError: '',
  postError: '',
  message: '',
};

const ProductSlice = createSlice({
  initialState,
  name: 'product',
  reducers: {
    updateErrorMsg: (state, { payload }) => {
      state.fetchError = payload;
      state.postError = payload;
      state.message = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, { payload }) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        return {
          ...state,
          products: payload,
          loading: false,
        };
      })
      .addCase(getProducts.rejected, (state, { payload, error }) => {
        state.loading = false;
        state.fetchError = error;
        return {
          ...state,
          loading: false,
          fetchError: payload,
        };
      });
    builder
      .addCase(postProduct.fulfilled, (state, { payload }) => {
        return {
          ...state,
          products: payload,
          message: payload['success'],
        };
      })
      .addCase(postProduct.rejected, (state, { payload }) => {
        return {
          ...state,
          postError: payload,
        };
      });
  },
});

export const getProducts = createAsyncThunk('get/products', async () => {
  const res = await axios.get('http://127.0.0.1:5000/products');
  return res.data;
});

export const postProduct = createAsyncThunk(
  'post/Product',
  async (data, thunkApi) => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/products', data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const { updateErrorMsg } = ProductSlice.actions;
export default ProductSlice.reducer;
