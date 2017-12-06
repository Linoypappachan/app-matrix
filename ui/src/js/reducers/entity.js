import {
    CLEAR_ENTITY,
    SET_ENTITY
} from '../actions/types.js';

export default function entity(state=null, action) {
    switch(action.type) {
        case CLEAR_ENTITY: {
            return null;
        }
        case SET_ENTITY: {
            return action.entity
        }
        default: 
            return null;
    }
}
