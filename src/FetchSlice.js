import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
import axios from 'axios';

// `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=
//       HU7Q0Pr - w3r2Osiir2QuVX2deQ8mK07brUC_J5w6E7g
//     `;

export const fetchReq = createAsyncThunk(
  'req/fetchReq',
  async (obj, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=
      HU7Q0Pr - w3r2Osiir2QuVX2deQ8mK07brUC_J5w6E7g
    `
      );

      const data = await response.data;
      console.log(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const FetchSlice = createSlice({
  name: 'req',
  initialState: {
    loading: false,
    error: null,
    res: [],
  },
  extraReducers: {
    [fetchReq.pending]: (state) => {
      state.loading = true;
    },
    [fetchReq.fulfilled]: (state, { payload }) => {
      state.res = payload;
      state.loading = false;
    },
    [fetchReq.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default FetchSlice.reducer;
