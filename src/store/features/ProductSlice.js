import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const Url = 'https://mini-ecommerce-back-end.vercel.app/products';
const LUrl = 'http://127.0.0.1:5000/products';
const initialState = {
  products: [],
  loading: false,
  error: false,
  message: false,
  productDelete: [],
};

const ProductSlice = createSlice({
  initialState,
  name: 'product',
  reducers: {
    updateErrorMsg: (state, { payload }) => {
      state.error = false;
    },
    setDeleteProduct: (state, { payload }) => {
      if (state.productDelete.includes(payload)) {
        state.productDelete = state.productDelete.filter(
          (val) => val !== payload
        );
      } else {
        state.productDelete.push(payload);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.loading = false;

        // Set init check states
        state.message = false;
        state.error = '';
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    // Add Product
    builder
      .addCase(postProduct.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.message = payload['success'];
        // state.error = '';
      })
      .addCase(postProduct.rejected, (state, { payload }) => {
        // state.message = false;
        state.error = true;
      });
    builder
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const getProducts = createAsyncThunk(
  'get/products',
  async (thunkApi) => {
    try {
      const res = await axios.get(`${LUrl}`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const postProduct = createAsyncThunk(
  'post/Product',
  async (data, thunkApi) => {
    try {
      const res = await axios.post(`${LUrl}`, data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'delete/Product',
  async (data, thunkApi) => {
    console.log(data);
    try {
      const res = await axios.delete(`${LUrl}`, {
        data: data,
      });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const { updateErrorMsg, setDeleteProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
