import {REGISTRATION_ACTIONS_TYPE} from '../actions/registration';

const initialState = {
  isLoading: false
};

function reducer(state = initialState, action) {
  const {type, payload} = action;
  const {REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR} = REGISTRATION_ACTIONS_TYPE;
  switch (type) {
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        token: payload.token
      };
    }

    case REGISTRATION_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: {
          status: payload.error.status,
          code: payload.error.code
        }
      };
    }

    default:
      return state;
  }
}

export default reducer;