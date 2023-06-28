import { configureStore } from "@reduxjs/toolkit";
import createMiddleware from '@redux-saga/core'
import {createLogger} from 'redux-logger'
import curriculumReducer from '../curriculumSchema/reducer/curriculumReducer'
import masterReducer from "../masterScehma/reducer/masterReducer";
import { combineReducers } from 'redux'
import rootSaga from '../sagaGlobal'

const logger = createLogger()
const saga = createMiddleware()
const reducer = combineReducers({
        curriculumReducer,
        masterReducer
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(logger).concat(saga)
})

saga.run(rootSaga)
export default store
