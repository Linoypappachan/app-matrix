import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import styles from '../../css/style.css';

import Components from './components.jsx';
import Containers from './containers.jsx';
import Hosts from './hosts.jsx';
import Databases from './databases.jsx';
import Matrix from './matrix.jsx';


function _Body(props) {
    let el = null;
    switch (props.view) {
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

function mapStateToProps(state) {
    return { view: state.view };
}

const Body = connect(mapStateToProps)(_Body);

export default Body;