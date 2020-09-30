import { createSelector } from 'reselect';
import _get from 'lodash/fp/get';
import { REDUCER_NAME } from './consts';

export const selectIsLoading = createSelector(
  (state) => state[REDUCER_NAME],
  _get('loading')
);

export const selectService = createSelector(
  (state) => state[REDUCER_NAME],
  _get('service')
);

export const selectSubServices = createSelector(
  (state) => state[REDUCER_NAME],
  _get('subservices')
);
