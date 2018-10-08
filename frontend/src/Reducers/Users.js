import * as types from '../Constants/Users';


const initialState = {
  data: {},
  isLoading: false,
  didLoad: false,
};


export default function usersReducer(state = initialState, { payload, type }) {
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
        didLoad: true,
      };

    case types.LOAD_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
