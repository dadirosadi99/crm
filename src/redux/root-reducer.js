import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth.reducer';
import leadsReducer from './leads/leads.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const rootReducer = combineReducers({
  auth: authReducer,
  leads: leadsReducer
});

export default persistReducer(persistConfig, rootReducer);
