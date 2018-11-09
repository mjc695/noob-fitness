import {
  createStore,
  combineRducers,
  applyMiddleware,
  combineReducers,
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import user from './user';
import exercise from './exercise';

const reducer = combineReducers({ user, exercise });

const store = createStore(reducer);

export default store;
export * from './user';
export * from './exercise';
