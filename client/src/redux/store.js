import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import ReduxThunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'watches']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(ReduxPromise, logger, ReduxThunk));

export default store;