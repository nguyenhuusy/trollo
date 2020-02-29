import {SAVE_NAME_DESCRIPTION_ITEM,SAVE_NAME_TABLE_ITEM,SAVE_DEADLINE,SAVE_LOCATION,SAVE_DEADLINE_TOTAL} from '../type';

export const save_description_item=(data)=> dispatch => {
    
    return dispatch({
            type:SAVE_NAME_DESCRIPTION_ITEM,
            payload:data
        })
    
}
export const save_name_item=(data)=>dispatch=>{
    return dispatch({
        type: SAVE_NAME_TABLE_ITEM,
        payload:data
    })
}
export const save_deadline=(data)=>dispatch=>{
    return dispatch({
        type: SAVE_DEADLINE,
        payload:data
    })
}
export const save_location=(data)=>dispatch=>{
    return dispatch({
        type: SAVE_LOCATION,
        payload:data
    })
}
export const save_deadline_total=(data)=>dispatch=>{
    return dispatch({
        type: SAVE_DEADLINE_TOTAL,
        payload:data
    })
}