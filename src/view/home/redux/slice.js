import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'home',
  initialState: {
    place: '',
  },
  reducers: {
    getPlace: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.place = payload;
    },
  },
});

const { getPlace } = slice.actions;

export const actions = {
  getPlace,
};

export default slice.reducer;
