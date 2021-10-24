import { combineReducers } from 'redux';

import auth from './auth';
import projects from './portofolio';
import users from './user';
import joboffers from './joboffers'
import complaints from './complaints';


export const reducers = combineReducers({ auth, projects, users, joboffers, complaints });