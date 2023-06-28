import ActionType from "../action/actionType";

const initialState = {
    bootcamp: [],
    message: '',
    status: '',
    refresh: ''
}

function bootcampReducer(state = initialState, action:any){
    let {type, payload} = action
    console.log('bootcampReducer',payload)
    switch (type) {
        case ActionType.RES_GET_BOOTCAMP:
            return {state, bootcamp: payload.result, status: payload.status, message:payload.message, refresh: true}
        case ActionType.RES_GET_BOOTCAMP_BY_ID:
            return { status: payload.status, message:payload.message, refresh: false}
        // case ActionType.RES_GET_PROGNAME:
        //     return {progname: payload.result, status: payload.status, message:payload.message, refresh: false}
        default:
            return state;
    }
}


export default bootcampReducer