import { apiBaseURL } from '../utils/constants';
import {
  FETCH_COIN_DATA,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_COIN_DATA_FAIL,
} from '../utils/actionTypes';

export default function fetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCH_COIN_DATA });

    return fetch(apiBaseURL + '/v1/ticker/?limit=10', { method: 'GET' })
      .then(response =>
        dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: response.json() }),
      )
      .catch(err =>
        dispatch({ type: FETCH_COIN_DATA_FAIL, payload: err.data }),
      );
  };
}
