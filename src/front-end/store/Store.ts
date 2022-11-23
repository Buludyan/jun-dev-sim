import {helpWebsiteReducer} from '../slices/helpWebsiteSlice';
import {configureStore} from '@reduxjs/toolkit';
import {timeProcessReducer} from '../slices/timeProcessSlice';

export const store = configureStore({
  reducer: {
    helpWebsite: helpWebsiteReducer,
    timeProcess: timeProcessReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
