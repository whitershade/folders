import { createAction } from 'redux-actions';
import * as types from '../Constants/App';


export const openEditDerectoryForm = createAction(types.OPEN_EDIT_DIRECTORY_FORM);
export const closeEditDirectoryForm = createAction(types.CLOSE_EDIT_DIRECTORY_FORM);
