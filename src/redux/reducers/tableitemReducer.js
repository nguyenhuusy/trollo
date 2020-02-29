import {SAVE_NAME_DESCRIPTION_ITEM,SAVE_NAME_TABLE_ITEM,SAVE_DEADLINE,SAVE_LOCATION,SAVE_DEADLINE_TOTAL} from '../type';

const initialState = {
    name:[],
    description:[],
    deadline:'',
    location:[],
    deadline_total:[]
}

export default function(state=initialState,action) {
    switch (action.type) {
        case SAVE_NAME_TABLE_ITEM:
            
        return {
                ...state,
                name:action.payload
                
            }
        case SAVE_NAME_DESCRIPTION_ITEM:
        return {
            ...state,
            description:action.payload
        }
        case SAVE_DEADLINE:
        return {
            ...state,
            deadline:action.payload
        }
        case SAVE_DEADLINE_TOTAL:
        return {
            ...state,
            deadline_total:action.payload
        }
        case SAVE_LOCATION:
        return {
            ...state,
            location:action.payload
        }
        default:
            return state;
    }
}