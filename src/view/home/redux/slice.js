import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'home',
  initialState: {
    place: '',
    searchResults: [],
    sidebar: true,
    mapState: false,
  },
  reducers: {
    getPlace: (state, { payload }) => {
      state.place = payload;
    },
    getSearchResults: (state, { payload }) => {
      state.searchResults = payload;
    },
    handleSidebar: (state, { payload }) => {
      state.sidebar = payload;
    },
    handleMapState: (state, { payload }) => {
      state.mapState = payload;
    },
  },
});

const {
  getPlace, getSearchResults, handleSidebar, handleMapState,
} = slice.actions;

export const actions = {
  getPlace,
  getSearchResults,
  handleSidebar,
  handleMapState,
};

export default slice.reducer;
