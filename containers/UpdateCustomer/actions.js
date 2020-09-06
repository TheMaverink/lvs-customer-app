export const UPDATE_CUSTOMER_REQUEST = 'UPDATE_CUSTOMER_REQUEST';
export const UPDATE_CUSTOMER_FAILURE = 'UPDATE_CUSTOMER_FAILURE';
export const UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS';



export const updateCustomerRequest = (phoneNumber,name,email) => {
  return {
    type: UPDATE_CUSTOMER_REQUEST,
    payload: {phoneNumber,name,email}
  };
};

export const updateCustomerFailure = (errorMessage) => {
  return {
    type: UPDATE_CUSTOMER_FAILURE,
    payload: errorMessage,
  };
};

export const updateCustomerSuccess = (userData) => {
  return {
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: {userData}
  };
};
