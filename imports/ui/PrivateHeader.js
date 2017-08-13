import React from 'react';
import { Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <button type="Logout" name="Logout" onClick={() => Accounts.logout()}>Logout</button>
        </div>
    ); 
};

PrivateHeader.proptypes = {
    title: React.PropTypes.string.isRequired
}

export default PrivateHeader;