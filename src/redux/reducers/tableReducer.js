import {SAVE_NAME_TABLE,SAVE_NAME_DESCRIPTION} from '../type';

const initialState = {
    name:[],
    description:[]
}

export default function(state=initialState,action) {
    switch (action.type) {
        case SAVE_NAME_TABLE:
            
        return {
                ...state,
                name:action.payload
                
            }
        case SAVE_NAME_DESCRIPTION:
        return {
            ...state,
            description:action.payload
        }
        
        default:
            return state;
    }
}