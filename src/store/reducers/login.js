import {LOGIN_ACTIONS_TYPE} from '../actions/login';

const initialState = {
  isLoading: false
};

function reducer(state = initialState, action) {
  const {type, payload, error} = action;
  const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} = LOGIN_ACTIONS_TYPE;
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        token: payload.token
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        error
      };
    }

    default:
      return state;
  }
}

export default reducer;