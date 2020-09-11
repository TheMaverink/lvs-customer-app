import { connect, useStore } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';

import {
  washesRequest,
  washesFailure,
  washesSuccess,
  selectWashRequest,
  selectWashFailure,
  selectWashSuccess,
} from './actions';

import { REDUCER_NAME } from './consts';

import { selectIsLoading, selectWashes, selectWash } from './selectors';
import store from 'store/store';

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  washes: selectWashes,
  selectedWash: selectWash,
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      washesRequest,
      washesFailure,
      washesSuccess,
      selectWashRequest,
      selectWashFailure,
      selectWashSuccess,
    },
    dispatch
  );

export default compose(
  connect(mapStateToProps, mapDispatchToProps),

  lifecycle({
    componentDidMount() {
      //call washes here ?
      
      store.injectReducer(REDUCER_NAME, reducer);
    },
  })
);
