import { combineReducers, createStore } from 'redux';

import components from './reducers/components.js';
import containers from './reducers/containers.js';
import databases from './reducers/databases.js';
import hosts from './reducers/hosts.js';
import matrix from './reducers/matrix.js';
import message from './reducers/message.js';
import mode from './reducers/mode.js';
import view from './reducers/view.js';

const sampleState = {
    view: '',
    mode: null,
    message: {
        type: null,
        text: ''
    },
    matrix: [],
    components: [],
    containers: [],
    hosts: [],
    databases: []
};

const reducers = combineReducers({
    view,
    mode,
    message,
    matrix,
    components,
    containers,
    hosts,
    databases
});

// TODO : matrix in sampleState to be loaded from REST service.
// const store = createStore(reducers, sampleState);
const store = createStore(reducers);

export default store;

