import {
  GET_SERVICES_REQUEST,
  GET_SERVICES_FAILURE,
  GET_SERVICES_SUCCESS,
} from './actions';

const initialState = {
  loading: false,
  errorMessage: null,
  service: null,
  subServices:null

};

export default function reducer(state = initialState, action) {
 
  switch (action.type) {
    case  GET_SERVICES_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        service: action.payload,
 
      };
    }

    case GET_SERVICES_FAILURE: {
      return {
        ...state,
        loading: false,
        service:null
        
      };
    }

    case GET_SERVICES_SUCCESS: {
      return {
        ...state,
        loading: false,
        subServices: action.payload
      };
    }

   

    default:
      return state;
  }
}
