import { combineReducers } from 'redux';

import auth from './auth';
import projects from './portofolio';
import CreditCards from './CreditCard'
import users from './user';
import joboffers from './joboffers'
import complaints from './complaints';
import reviews from './review';

export const reducers = combineReducers({ auth, projects,CreditCards, users, joboffers, complaints, reviews });