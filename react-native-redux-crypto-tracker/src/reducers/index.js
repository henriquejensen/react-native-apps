import { combineReducers } from 'redux';
import {
  FETCH_COIN_DATA,
  FETCH_COIN_DATA_FAIL,
  FETCH_COIN_DATA_SUCCESS,
} from '../utils/actionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_COIN_DATA:
      return {
        ...state,
        isFetching: true,
        data: [],
      };

    case FETCH_COIN_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      };

    case FETCH_COIN_DATA_FAIL:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        hasError: true,
        errorMessage: action.err,
      };

    default:
      return state;
  }
}

export default combineReducers({
  crypto: reducers,
});
