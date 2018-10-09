import * as types from '../Constants/App';


const initialState = {
  isDirectoryFormOpen: false,
};


export default function appReducer(state = initialState, { type }) {
  switch (type) {
    case types.OPEN_EDIT_DIRECTORY_FORM:
      return {
        ...state,
        isDirectoryFormOpen: true,
      };

    case types.CLOSE_EDIT_DIRECTORY_FORM:
      return {
        ...state,
        isDirectoryFormOpen: false,
      };

    default:
      return state;
  }
}
