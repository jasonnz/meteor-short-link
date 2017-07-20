import React from 'react';
import { browserHistory } from 'react-router';

export default class Link extends React.Component {
  
  onLogout() {
    browserHistory.push('/');
  }

  render() {
    
    return (
      <div>
        <h1>Log out</h1>
        <button type="Logout" name="Logout" onClick={this.onLogout.bind(this)}></button>
      </div>
    );
  }
};