import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import styles from '../../css/style.css';

import { add, filter, remove, update } from '../actions/hosts.js';

class _Hosts extends React.Component {
    constructor(props) {
        super(props);
        this.clearState = { ipaddr: '', hostname: '', os: ''};
        this.state = {...this.clearState};
        this.handleChange = this.handleChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.addHost = this.addHost.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    clearForm() {
        this.setState({...this.clearState});
    }

    addHost() {
        this.props.addHost({...this.state});
    }

    render() {
        // ipaddr, hostname, os
        return (
            <div>
                <div className="form">
                    <label>
                        IP Address: 
                        <input name="ipaddr"
                            onChange={this.handleChange}
                            type="text" value={this.state.ipaddr}/>
                    </label>
                    <label>
                        Host Name: 
                        <input name="hostname"
                            onChange={this.handleChange}
                            type="text" value={this.state.hostname} />
                    </label>
                    <label>
                        Operating System: 
                        <input name="os"
                            onChange={this.handleChange}
                            type="text" value={this.state.os} />
                    </label>
                    <br/><br/>
                    <div className={styles.actiongroup}>
                        <button onClick={this.addHost}>Add</button>
                        <button>Update</button>
                        <button>Search</button>
                        <button onClick={this.clearForm}>Clear</button>
                    </div>
                </div>
                <hr/>
                <div className="result">
                    <table>
                        <thead>
                            <tr>
                                <th>IP Address</th>
                                <th>Host Name</th>
                                <th>Operating System</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (this.props.hosts) ? (this.props.hosts.map((c) => {
                                    return (
                                        <tr key={c.ipaddr}>
                                            <td>{c.ipaddr}</td>
                                            <td>{c.hostname}</td>
                                            <td>{c.os}</td>
                                            <td><button>Delete</button></td>
                                        </tr>                            
                                        );                                    
                                    })) : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { hosts: state.hosts };
}

function mapDispatchToProps(dispatch) {
    return ({
        addHost: function(host) {
            dispatch(add(host));
        }
    });
}

const Hosts = connect(mapStateToProps, mapDispatchToProps)(_Hosts);

export default Hosts;