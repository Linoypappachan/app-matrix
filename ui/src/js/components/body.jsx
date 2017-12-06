import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../../css/style.css';

import Components from './components.jsx';
import Containers from './containers.jsx';
import Hosts from './hosts.jsx';
import Databases from './databases.jsx';
import Matrix from './matrix.jsx';


function Body(props) {
    let view = props.view;
    let el = null;
    switch (view) {
        case 'components': {
            el = <Components />;
            break;
        }
        case 'containers': {
            el = <Containers />;
            break;
        }
        case 'hosts': {
            el = <Hosts />;
            break;
        }
        case 'databases': {
            el = <Databases />;
            break;
        }
        default: {
            el = <Matrix />;
        }
            
    }
    return (
        <div>
            {
                el
            }
        </div>
    )
}

export default Body;