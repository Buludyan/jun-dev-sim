import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GameSceneState {
  eventsCount: number;
}

const initialState: GameSceneState = {
  eventsCount: 0,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    incrementEventsCount: state => {
      ++state.eventsCount;
    },
  },
});

export const eventsActions = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
