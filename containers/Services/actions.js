export const GET_SERVICES_REQUEST = 'GET_SERVICES_REQUEST';
export const GET_SERVICES_FAILURE = 'GET_SERVICES_FAILURE';
export const GET_SERVICES_SUCCESS = 'GET_SERVICES_SUCCESS';

export const getServicesRequest = (service) => {
  return {
    type: GET_SERVICES_REQUEST,
    payload: service
  };
};

export const getServicesFailure = (errorMessage) => {
  return {
    type: GET_SERVICES_FAILURE,
    payload: errorMessage,
  };
};

export const getServicesSuccess = (subServices) => {
  return {
    type: GET_SERVICES_SUCCESS,
    payload: subServices
  };
};
