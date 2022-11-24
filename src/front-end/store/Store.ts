import {helpWebsiteReducer} from '../slices/helpWebsiteSlice';
import {configureStore} from '@reduxjs/toolkit';
import {eventsReducer} from '../slices/eventsSlice';

export const store = configureStore({
  reducer: {
    helpWebsite: helpWebsiteReducer,
    events: eventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
