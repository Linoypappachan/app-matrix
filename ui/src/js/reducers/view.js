import {
    SWITCH_VIEW
} from '../actions/types.js';

export default function switch_view(state='matrix', action) {
    return (action.view) || state;
}