import {
    ADD_HOST,
    UPDATE_HOST,
    DELETE_HOST,
    FILTER_HOSTS
} from '../actions/types.js';

export default function hosts(state=[], action) {
    switch (action.type) {
        case ADD_HOST: {
            return (
                [
                    ...state,
                    action.host
                ]
            );
        }
        case UPDATE_HOST: {
            return state;
        }
        case DELETE_HOST: {
            return state;
        }
        case FILTER_HOSTS: {
            return ([
                ...action.hosts
            ]);
        }
        default: {
            return state;
        }
    }
}