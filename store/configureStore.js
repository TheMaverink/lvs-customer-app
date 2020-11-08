import { reducer as formReducer } from 'redux-form'
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import navigationDebouncer from 'react-navigation-redux-debouncer'
import rootSaga from './rootSaga'

import calendarReducer from 'containers/Calendar/reducer'


const sagaMiddleware = createSagaMiddleware()

const staticReducers = {
  // ADD STATIC REDUCERS HERE
  'CALENDAR':calendarReducer

}

export default function configureStore(initialState = {}) {
  const middlewares = [ sagaMiddleware, navigationDebouncer(500) ]
  const enhancers = [ applyMiddleware(...middlewares) ]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers))
  store.asyncReducers = {}
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[ key ] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }
  sagaMiddleware.run(rootSaga)

  return store
}

function createReducer(asyncReducers) {
  return combineReducers({
    form: formReducer,
    ...staticReducers,
    ...asyncReducers,

  })
}
