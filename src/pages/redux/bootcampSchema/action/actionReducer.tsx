import ActionType from "./actionType";

//getAllBootcmap
export const reqGetBootcamp = () => {
    return{
        type : ActionType.REQ_GET_BOOTCAMP
    }
}
export const resGetBootcamp = (payload:any) => {
    return{
        type : ActionType.RES_GET_BOOTCAMP,
        payload
    }
}

//getBootcmap by id
export const reqGetBootcampById = (payload:any) => {
    return{
        type : ActionType.REQ_GET_BOOTCAMP_BY_ID,
        payload
    }
}
export const resGetBootcampById = (payload:any) => {
    return{
        type : ActionType.RES_GET_BOOTCAMP_BY_ID,
        payload
    }
}


//getProgName
export const reqGetProgName = () => {
    return{
        type : ActionType.REQ_GET_PROGNAME
    }
}
export const resGetProgName = (payload:any) => {
    return{
        type : ActionType.RES_GET_PROGNAME,
        payload
    }
}