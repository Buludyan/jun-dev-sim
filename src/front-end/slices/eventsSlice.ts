import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Initial {
  isWorkInProgress: boolean;
  isLunchInProgress: boolean;
}

const initialState: Initial = {
  isWorkInProgress: true,
  isLunchInProgress: false,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setWorkInProgress: (state, action: PayloadAction<boolean>) => {
      state.isWorkInProgress = action.payload;
    },
    setLunchInProgress: (state, action: PayloadAction<boolean>) => {
      state.isLunchInProgress = action.payload;
    },
  },
});

export const eventsActions = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
