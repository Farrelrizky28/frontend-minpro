import ActionType from "../action/actionType";

const initialState = {
    progname: [],
    message: '',
    status: '',
    refresh: ''
}


function progNameReducer (state = initialState, action:any){
    let {type, payload} = action
    console.log('reducerProg',payload)
    switch (type) {
        case ActionType.RES_GET_PROGNAME:
            return {state, progname:payload.result, message:payload.message, refresh:true}
        default:
            return state
    }
}

export default progNameReducer