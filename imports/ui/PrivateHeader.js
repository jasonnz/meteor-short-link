import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class PrivateHeader extends React.Component {

    onLogout() {
        Accounts.logout();
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button type="Logout" name="Logout" onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        );
    }
}

PrivateHeader.proptypes = {
    title: React.PropTypes.string.isRequired
}