export const WASHES_REQUEST = 'WASHES_REQUEST';
export const WASHES_FAILURE = 'WASHES_FAILURE';
export const WASHES_SUCCESS = 'WASHES_SUCCESS';

export const SELECT_WASH_REQUEST = 'SELECT_WASH_REQUEST';
export const SELECT_WASH_FAILURE  = 'SELECT_WASH_FAILURE';
export const SELECT_WASH_SUCCESS = 'SELECT_WASH_SUCCESS';



export const washesRequest = () => {
  return {
    type: WASHES_REQUEST,
    
    
  };
};

export const washesFailure = (errorMessage) => {
  return {
    type: WASHES_REQUEST,
    payload: errorMessage,
  };
};

export const washesSuccess = (washes) => {
  return {
    type: WASHES_SUCCESS,
    payload: washes
  };
};

//

export const selectWashRequest = (wash) => {
  return {
    type: SELECT_WASH_REQUEST,
    payload: wash
  };
};

export const selectWashFailure = (errorMessage) => {
  return {
    type: SELECT_WASH_FAILURE,
    payload: errorMessage,
  };
};

export const selectWashSuccess = (wash) => {
  return {
    type: SELECT_WASH_SUCCESS,
    payload: wash
  };
};
