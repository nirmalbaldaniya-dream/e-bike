
import * as actions from './actions.js';

const INITIAL_STATE = {};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOAD:
      return {
        ...state,
        loadInProgress: true
      };
    
    case actions.LOAD_SUCCESS:
      return {
        ...state,
        loadInProgress: false,
        data: action.data
      };
    
    case actions.LOAD_FAILED:
      return {
        ...state,
        loadInProgress: false
      }

      
    default:
      return state;
  }
};

export default app;
