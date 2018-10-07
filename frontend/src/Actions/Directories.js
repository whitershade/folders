import axios from 'axios';
import { createAction } from 'redux-actions';
import * as types from '../Constants/Directories';


const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const addFiles = createAction(types.ADD_FILES);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);
const startPushItem = createAction(types.START_PUSH_ITEM);
const updateItem = createAction(types.UPDATE_ITEM);
export const toggleFolder = createAction(types.TOGGLE_FOLDER);
export const markItemAsActive = createAction(types.MARK_ITEM_AS_ACTIVE);


export const loadItems = () => async (dispatch) => {
  dispatch(startLoadItems());

  Promise
    .all([axios.get('/api/directories'), axios.get('/api/files')])
    .then(([{ data: directories }, { data: files }]) => {
      dispatch(addItems(directories));
      dispatch(addFiles(files));
    });
};

export const updatePermissions = (id, permissions) => (dispatch, getState) => {
  dispatch(startPushItem());

  setTimeout(() => {
    const initialDirectory = getState().directories.data[id];
    const directory = {
      ...initialDirectory,
      attributes: {
        ...initialDirectory.attributes,
        permissions,
      },
    };

    dispatch(updateItem(directory));
  }, 1000);
};
