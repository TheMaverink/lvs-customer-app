import { createSelector } from 'reselect'
import _get from 'lodash/fp/get'
import { REDUCER_NAME } from './consts'

export const selectIsLoading = createSelector(
  (state) => state[REDUCER_NAME],
  _get('loading'),
)

export const selectDay = createSelector(
  (state) => state[REDUCER_NAME],
  _get('selectedDay'),
)


export const selectHour = createSelector(
  (state) => state[REDUCER_NAME],
  _get('selectedHour'),
)

export const selectWash = createSelector(
  (state)=> state['WASHES'],
  _get('selectedWash')
)


export const selectTimes = createSelector(
  (state) => state[REDUCER_NAME],
  _get('openingTimes'),
)

// export const bookingData = createSelector(
//   (state) => state[REDUCER_NAME],
//   _get('bookingData')
// )