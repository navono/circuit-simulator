import R from 'ramda';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

import {
  LOOP_BEGIN,
  LOOP_UPDATE,
  ADDING_MOVE,
  MOVING_MOVE,
  MOUSE_MOVED
} from './actions.js';
import createLogger from 'redux-logger';

const logger = createLogger({
  predicate: (getState, action) => {
    return __DEV__ && R.all(t => t !== action.type)([
      LOOP_BEGIN,
      LOOP_UPDATE,
      ADDING_MOVE,
      MOVING_MOVE,
      MOUSE_MOVED
    ]);
  },
  collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(rootReducer);
}