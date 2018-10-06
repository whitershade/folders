import axios from 'axios';
import { createAction } from 'redux-actions';
import * as types from '../Constants/Permissions';


const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);


export const loadItems = () => async (dispatch, getState) => {
  if (getState().didLoad) return;

  dispatch(startLoadItems());

  try {
    const { data: permissions } = await axios.get('/api/permissions');

    dispatch(addItems(permissions));
  } catch (e) {
    console.log(e);
  }
};
