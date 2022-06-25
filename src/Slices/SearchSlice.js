import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    img: '',
  },
  reducers: {
    getInput: (state, { payload }) => {
      state.img = payload;
    },
  },
});

export const { getInput } = SearchSlice.actions;

export default SearchSlice.reducer;
