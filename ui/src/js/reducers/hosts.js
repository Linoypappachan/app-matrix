import {
    FETCH_HOSTS
} from '../actions/types.js';

export default function hosts(state=[], action) {
    switch (action.type) {
        case FETCH_HOSTS: {
            return ([
                ...action.hosts
            ]);
        }
        default: {
            return state;
        }
    }
}