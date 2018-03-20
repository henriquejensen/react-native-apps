import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const store = createStore(
  reducers,
  compose(
    middleware,
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678,
    }),
  ),
);

export default store;
