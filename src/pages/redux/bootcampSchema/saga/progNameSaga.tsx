import apiMethod from "@/pages/api/curriculumSchema/apiMethod"
import {call, put} from 'redux-saga/effects'
import { resGetProgName } from "../action/actionReducer"


export function * handleGetProgName():any{
    try {
        const result = yield call(apiMethod.getProgName)
        yield put(resGetProgName(result.data))
    } catch (error) {
        yield put(resGetProgName({message: error, status: 404}))
    }
}