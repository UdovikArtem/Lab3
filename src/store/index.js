import { combineReducers, createStore } from 'redux';
// import {configureStore} from '@reduxjs/toolkit'
// import reducer from '../reducers/userReduser';
import {reducer} from '../reducers/userReduser'

const rootReducer = combineReducers(reducer)

export const store = createStore(reducer)