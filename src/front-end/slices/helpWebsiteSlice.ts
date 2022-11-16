import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Initial {
  isActive: boolean;
}

const initialState: Initial = {
  isActive: false,
};

export const helpWebsiteSlice = createSlice({
  name: 'helpWebsite',
  initialState,
  reducers: {
    setActive: state => {
      state.isActive = !state.isActive;
    },
  },
});

export const helpWebsiteActions = helpWebsiteSlice.actions;
export const helpWebsiteReducer = helpWebsiteSlice.reducer;
