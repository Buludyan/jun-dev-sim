import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Initial {
  isLunchTime: boolean;
}

const initialState: Initial = {
  isLunchTime: false,
};

export const timeProcessSlice = createSlice({
  name: 'timeProcess',
  initialState,
  reducers: {
    setLunchTime: (state, action: PayloadAction<boolean>) => {
      state.isLunchTime = action.payload;
    },
  },
});

export const timeProcessActions = timeProcessSlice.actions;
export const timeProcessReducer = timeProcessSlice.reducer;
