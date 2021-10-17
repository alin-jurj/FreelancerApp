import { combineReducers } from 'redux';

import auth from './auth';
import portofolio from './portofolio';


export const reducers = combineReducers({ auth, portofolio });