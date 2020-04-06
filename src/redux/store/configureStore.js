import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { IS_DEBUG } from '../../config/settings';

const middleware = [ReduxThunk];

if (IS_DEBUG().enableLogger) {
  const logger = createLogger({
    predicate: (getState, action) => true,
  });
  middleware.push(logger);
}

const createReduxStore = applyMiddleware(...middleware)(createStore);

const store = createReduxStore(rootReducer);

// store.dispatch();

export default store;
