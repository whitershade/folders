import axios from 'axios';
import { createAction } from 'redux-actions';
import * as types from '../Constants/Directories';
import { closeEditDirectoryForm } from './App';
import { showSuccess, showError } from './Notifications';


const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const addFiles = createAction(types.ADD_FILES);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);
const startPushItem = createAction(types.START_PUSH_ITEM);
const updateItem = createAction(types.UPDATE_ITEM);
const pushItemError = createAction(types.PUSH_ITEM_ERROR);
export const toggleFolder = createAction(types.TOGGLE_FOLDER);
export const markItemAsActive = createAction(types.MARK_ITEM_AS_ACTIVE);


export const loadItems = () => (dispatch) => {
  dispatch(startLoadItems());

  Promise
    .all([
      axios.get('/api/directories'),
      axios.get('/api/files'),
    ])
    .then(([{ data: directories }, { data: files }]) => {
      dispatch(addItems(directories));
      dispatch(addFiles(files));
    })
    .catch((error) => {
      dispatch(loadItemsError());
      dispatch(showError(error));
    });
};

export const updatePermissions = (id, permissions) => async (dispatch) => {
  dispatch(startPushItem());

  try {
    const { data: updatedDirectory } = await axios.patch(`/api/directories/${id}`, { permissions });

    dispatch(updateItem(updatedDirectory));
    dispatch(closeEditDirectoryForm());
    dispatch(showSuccess('Directory pemissions updated'));
  } catch (error) {
    dispatch(pushItemError());
    dispatch(showError(error));
  }
};
