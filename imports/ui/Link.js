import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Link extends React.Component {
  
  onLogout() {
    Accounts.logout();
    // localStorage
  }

  render() {
    
    return (
      <div>
        <h1>Log out</h1>
        <button type="Logout" name="Logout" onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
};