import { combineReducers } from 'redux';

import { RESET_STORE } from '../actionConstants';
import home from './musicStoreReducer';

const appReducer = combineReducers({
  home,
});

const rootReducer = (state, action) => {
  let newState = state;

  if (action.type === RESET_STORE) {
    newState = {
      init: state.init,
    };
  }

  return appReducer(newState, action);
};

/** export this module */
export default rootReducer;
