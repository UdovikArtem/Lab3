import { createStore } from 'redux';
// import {configureStore} from '@reduxjs/toolkit'
// import reducer from '../reducers/userReduser';
import {reducer} from '../reducers/userReduser'

export const store = createStore(reducer)