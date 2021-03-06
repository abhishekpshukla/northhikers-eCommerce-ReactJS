import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import rootReducer from './root-reducer';

const midldlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    midldlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...midldlewares));

export const persistor = persistStore(store);

export default { store, persistor };