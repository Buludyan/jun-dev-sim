import {bindActionCreators} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {helpWebsiteActions} from '../slices/helpWebsiteSlice';

const actions = {
  ...helpWebsiteActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
