import * as fetchHelper from '../../helpers/fetch-api';

export const REGISTRATION_ACTIONS_TYPE = {
  REGISTRATION_REQUEST: 'REGISTRATION_REQUEST',
  REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
  REGISTRATION_ERROR: 'REGISTRATION_ERROR'
};

export const registrationRequest = () => ({
  type: REGISTRATION_ACTIONS_TYPE.REGISTRATION_REQUEST
});

export const registrationSuccess = token => ({
  type: REGISTRATION_ACTIONS_TYPE.REGISTRATION_SUCCESS,
  payload: token
});

export const registrationError = error => ({
  type: REGISTRATION_ACTIONS_TYPE.REGISTRATION_ERROR,
  payload: {error}
});

export const register = (email, password) => {
  return dispatch => {
    dispatch(registrationRequest());
    const body = {
      email,
      password
    };

    return fetchHelper.postJson('/users/registration', body)
      .then(payload => {
        dispatch(registrationSuccess(payload));
      })
      .catch(error => {
        console.warn(`Error: Status ${error.status}, Code ${error.code}`);
        dispatch(registrationError(error));
      });
  };
};