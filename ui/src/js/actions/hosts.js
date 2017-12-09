import fetch from 'isomorphic-fetch';

import {
    ADD_HOST,
    UPDATE_HOST,
    DELETE_HOST,
    FILTER_HOSTS
} from './types.js';

export function add(host) {
    return function(dispatch) {
        let form = new FormData();
        form.append("host", JSON.stringify(host));
        fetch(`${REST_URL_BASE}/host/add`, {
            method: 'POST',
            body: form
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            if (json.status && json.status.toLowerCase() === 'ok') {
                dispatch(receiveAdd(host));
            } else {
                console.log(json);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export function update(host) {
    return ({
        type: UPDATE_HOST,
        host
    });
}

export function receiveHosts(hosts) {
    return ({
        type: FILTER_HOSTS,
        hosts
    });
}

export function filter(host) {
    return function(host) {
        
    }
}

export function remove(ipaddr) {
    return ({
        type: DELETE_HOST,
        ipaddr
    });
}