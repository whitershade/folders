import { createAction } from 'redux-actions';
import * as types from '../Constants/Directories';
import { structure } from '../Constants/mock';
import getFolders from '../Utils/getFolders';


const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const addStructure = createAction(types.ADD_STRUCTURE);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);
const startPushItem = createAction(types.START_PUSH_ITEM);
const updateItem = createAction(types.UPDATE_ITEM);
export const toggleFolder = createAction(types.TOGGLE_FOLDER);
export const markItemAsActive = createAction(types.MARK_ITEM_AS_ACTIVE);


export const loadItems = () => (dispatch) => {
  dispatch(startLoadItems());

  setTimeout(() => {
    dispatch(addStructure(structure));
    dispatch(addItems(getFolders(structure)));
  }, 1000);
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
