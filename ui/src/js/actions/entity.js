import {
    SET_ENTITY, CLEAR_ENTITY 
} from './types.js';

export function setEntity(entity) {
    return ({
        type: SET_ENTITY,
        entity
    });
}

export function clearEntity() {
    return ({
        type: CLEAR_ENTITY,
        entity: null
    })
}