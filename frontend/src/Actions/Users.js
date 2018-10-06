import axios from 'axios';
import { createAction } from 'redux-actions';
import * as types from '../Constants/Users';


const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);


export const loadItems = () => async (dispatch, getState) => {
  if (getState().didLoad) return;

  dispatch(startLoadItems());

  try {
    const { data: users } = await axios.get('/api/users');

    dispatch(addItems(users));
  } catch (e) {
    console.log(e);
  }
};
