import {bindActionCreators} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {helpWebsiteActions} from '../slices/helpWebsiteSlice';
import {timeProcessActions} from '../slices/timeProcessSlice';

const actions = {
  ...helpWebsiteActions,
  ...timeProcessActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
