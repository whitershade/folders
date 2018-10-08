import * as types from '../Constants/Directories';
import * as appTypes from '../Constants/App';
import showOpenDirectoryFullPath from '../Utils/showOpenDirectoryFullPath';


const initialState = {
  data: {},
  files: {},
  structure: [],
  isLoading: false,
  activeDirectory: '',
  editId: '',
};

export default function directoriesReducer(state = initialState, { payload, type }) {
  switch (type) {
    case types.START_LOAD_ITEMS:
      return {
        ...state,
        isLoading: true,
      };

    case types.ADD_ITEMS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };

    case types.ADD_FILES: {
      return {
        ...state,
        files: payload,
      };
    }

    case types.LOAD_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case types.MARK_ITEM_AS_ACTIVE: {
      return {
        ...state,
        data: {
          ...state.data,
          ...showOpenDirectoryFullPath(state.data, payload),
        },
        activeDirectory: payload,
      };
    }

    case types.TOGGLE_FOLDER: {
      const directory = state.data[payload];
      const { isFolderOpen } = directory.attributes;

      const directoryWithToggledFolder = {
        ...directory,
        attributes: {
          ...directory.attributes,
          isFolderOpen: !isFolderOpen,
        },
      };

      return {
        ...state,
        data: {
          ...state.data,
          [payload]: directoryWithToggledFolder,
        },
      };
    }

    case types.START_PUSH_ITEM: {
      return {
        ...state,
        isPushing: true,
      };
    }

    case types.UPDATE_ITEM: {
      return {
        ...state,
        data: {
          ...state.data,
          [payload.id]: payload,
        },
      };
    }

    case appTypes.OPEN_EDIT_DIRECTORY_FORM: {
      return {
        ...state,
        editId: payload,
      };
    }

    case appTypes.CLOSE_EDIT_DIRECTORY_FORM: {
      return {
        ...state,
        editId: '',
      };
    }

    default:
      return state;
  }
}
