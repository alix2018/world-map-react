import * as fetchHelper from '../../helpers/fetch-api';

export const LOGIN_ACTIONS_TYPE = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR'
};

export const loginRequest = () => ({
  type: LOGIN_ACTIONS_TYPE.LOGIN_REQUEST
});

export const loginSuccess = token => ({
  type: LOGIN_ACTIONS_TYPE.LOGIN_SUCCESS,
  payload: {token}
});

export const loginError = error => ({
  type: LOGIN_ACTIONS_TYPE.LOGIN_ERROR,
  payload: {error}
});

export const fetchToken = (email, password) => {
  return dispatch => {
    dispatch(loginRequest());
    const body = {
      email,
      password
    };

    return fetchHelper.postJson('/users/login', body)
      .then(payload => {
        dispatch(loginSuccess(payload));
      })
      .catch(error => {
        console.warn(`Error: Status ${error.status}, Code ${error.code}`);
        dispatch(loginError(error));
      });
  };
};