import {SAVE_NAME_DESCRIPTION,SAVE_NAME_TABLE} from '../type';

export const save_description=(data)=> dispatch => {
    
    return dispatch({
            type:SAVE_NAME_DESCRIPTION,
            payload:data
        })
    
}
export const save_name=(data)=>dispatch=>{
    return dispatch({
        type: SAVE_NAME_TABLE,
        payload:data
    })
}
