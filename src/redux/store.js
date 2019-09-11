import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const midldlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...midldlewares));

export default store;