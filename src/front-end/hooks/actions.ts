import {bindActionCreators} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {helpWebsiteActions} from '../slices/helpWebsiteSlice';
import {eventsActions} from '../slices/eventsSlice';

const actions = {
  ...helpWebsiteActions,
  ...eventsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
