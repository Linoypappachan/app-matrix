import {
    ADD_HOST,
    UPDATE_HOST,
    DELETE_HOST,
    FILTER_HOSTS
} from './types.js';

export function add(host) {
    return ({
        type: ADD_HOST,
        host
    });
}

export function update(host) {
    return ({
        type: UPDATE_HOST,
        host
    });
}

export function filter(host) {
    return ({
        type: FILTER_HOSTS,
        host
    });
}

export function remove(ipaddr) {
    return ({
        type: DELETE_HOST,
        ipaddr
    });
}