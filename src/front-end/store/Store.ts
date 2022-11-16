import {helpWebsiteReducer} from '../slices/helpWebsiteSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    helpWebsite: helpWebsiteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
