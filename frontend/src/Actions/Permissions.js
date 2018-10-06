import { createAction } from 'redux-actions';
import * as types from '../Constants/Permissions';
import { permissions } from '../Constants/mock';


const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);


export const loadItems = () => (dispatch, getState) => {
  const { permissions: { didLoad } } = getState();

  if (didLoad) return;

  dispatch(startLoadItems());

  setTimeout(() => {
    dispatch(addItems(permissions));
  }, 1000);
};
