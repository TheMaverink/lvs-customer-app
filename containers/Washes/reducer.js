import { REDUCER_NAME } from './consts';

import {
  WASHES_REQUEST,
  WASHES_FAILURE,
  WASHES_SUCCESS,
  SELECT_WASH_REQUEST,
  SELECT_WASH_FAILURE,
  SELECT_WASH_SUCCESS,

} from './actions';

const initialState = {
  loading: false,
  errorMessage: null,
  washes: null,
  selectedWash:null
};

export default function reducer(state = initialState, action) {
 
  switch (action.type) {
    case  WASHES_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        washes: null,
 
      };
    }

    case WASHES_FAILURE: {
      return {
        ...state,
        loading: false,
        washes:null
        
      };
    }

    case WASHES_SUCCESS: {
      return {
        ...state,
        loading: false,
        washes: action.payload
      };
    }

    // 

    case  SELECT_WASH_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        selectedWash:null
 
      };
    }

    case SELECT_WASH_FAILURE: {
      return {
        ...state,
        loading: false,
        selectedWash:null
        
      };
    }

    case SELECT_WASH_SUCCESS: {
      return {
        ...state,
        loading: false,
        selectedWash:action.payload
     
      };
    }

    default:
      return state;
  }
}
