import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { regMiddleware, authMiddleware } from './authMiddleware';

export const store = createStore(rootReducer, applyMiddleware(regMiddleware, authMiddleware))