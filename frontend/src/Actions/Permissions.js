import axios from 'axios';
import { createAction } from 'redux-actions';
import * as types from '../Constants/Permissions';
import { showError } from './Notifications';


const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);


export const loadItems = () => async (dispatch, getState) => {
  const { permissions: { didLoad } } = getState();

  if (didLoad) return;

  dispatch(startLoadItems());

  try {
    const { data: permissions } = await axios.get('/api/permissions');

    dispatch(addItems(permissions));
  } catch (error) {
    dispatch(loadItemsError());
    dispatch(showError(error));
  }
};
