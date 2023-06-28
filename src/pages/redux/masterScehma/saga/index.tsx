import { takeEvery, all } from 'redux-saga/effects';
import ActionTypes from '../action/actionType';
import {
    handleGetMaster
} from './masterSaga';

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.REQ_GET_MASTER, handleGetMaster),
    // takeEvery(ActionTypes.REQ_CREATE_CURRICULUM, handleCreateCurriculum)
  ]);
}

export default watchAll;