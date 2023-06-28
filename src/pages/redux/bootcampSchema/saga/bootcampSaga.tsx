import apiMethod from '../../../api/curriculumSchema/apiMethod'
import {call, put} from 'redux-saga/effects'
import { resGetBootcamp, resGetBootcampById, resGetProgName } from '../action/actionReducer'


export function * handleGetBootcamp():any{
    try {
        const result = yield call(apiMethod.getBootcamp)
        yield put(resGetBootcamp(result.data))
    } catch (error) {
        yield put(resGetBootcamp({message: error, status: 404}))
    }
}
export function * handleGetBootcampById(action:any):any{
    try {
        const result = yield call(apiMethod.getBootcampById, action.payload)
        yield put(resGetBootcampById(result.data))
    } catch (error) {
        yield put(resGetBootcampById({message: error, status: 404}))
    }
}

