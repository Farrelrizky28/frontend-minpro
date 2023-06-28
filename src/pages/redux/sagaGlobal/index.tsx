import { takeEvery, all } from 'redux-saga/effects'
import CurriculumActionType from '../curriculumSchema/action/actionType'
import MasterActionType from '../masterScehma/action/actionType'
import { handleCreateCurriculum, handleCreateSection, handleCreateSectionDetail, handleDeleteCurri, handleGetCurrNum, handleGetCurriculum, handleGetCurriculumByid, handleGetSectionMerge, handleGetUserEmployee, handleUpdateCurriculum } from '../curriculumSchema/saga/curriculumSaga'
import { handleGetMaster } from '../masterScehma/saga/masterSaga'

function* watchAll() {
    yield all([
        takeEvery(CurriculumActionType.REQ_GET_CURRICULUM, handleGetCurriculum),
        takeEvery(MasterActionType.REQ_GET_MASTER, handleGetMaster),
        takeEvery(CurriculumActionType.REQ_GET_CURRNUM, handleGetCurrNum),
        takeEvery(CurriculumActionType.REQ_CREATE_CURRICULUM, handleCreateCurriculum),
        takeEvery(CurriculumActionType.REQ_GET_CURRICULUM_BY_ID, handleGetCurriculumByid),
        takeEvery(CurriculumActionType.REQ_UPDATE_CURRICULUM, handleUpdateCurriculum),
        takeEvery(CurriculumActionType.REQ_CREATE_SECTION, handleCreateSection),
        takeEvery(CurriculumActionType.REQ_CREATE_SECTION_DETAIL, handleCreateSectionDetail),
        takeEvery(CurriculumActionType.REQ_GET_MERGE, handleGetSectionMerge),
        takeEvery(CurriculumActionType.GETEMPLOYEE, handleGetUserEmployee),
        takeEvery(CurriculumActionType.REQ_DELETE_CURRICULUM, handleDeleteCurri),
    ])
}

export default watchAll