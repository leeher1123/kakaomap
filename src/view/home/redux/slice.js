import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'home',
  initialState: {
    place: '',
    searchResults: [],
  },
  reducers: {
    getPlace: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.place = payload;
    },
    getSearchResults: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.searchResults = payload;
    },
  },
});

const { getPlace, getSearchResults } = slice.actions;

export const actions = {
  getPlace,
  getSearchResults,
};

export default slice.reducer;
