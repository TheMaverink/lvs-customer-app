import { createSelector } from 'reselect'
import _get from 'lodash/fp/get'
import { REDUCER_NAME } from './consts'

export const selectIsLoading = createSelector(
  (state) => state[REDUCER_NAME],
  _get('loading'),
)

export const selectWashes = createSelector(
  (state) => state[REDUCER_NAME],
  _get('washes'),
)


export const selectWash = createSelector(
  (state) => state[REDUCER_NAME],
  _get('selectedWash'),
)

