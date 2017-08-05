import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from '../ui/LinksList';

export default class Link extends React.Component {
  
  onLogout() {
    Accounts.logout();
    // localStorage
  }

  onSubmit(e) {
    const url = this.refs.url.value.trim();
    e.preventDefault();

    if (url) {
      Links.insert({ url, userId: Meteor.userId() });
      this.refs.url.value = '';
    }
  }

  render() {
    
    return (
      <div>
        <h1>Log out</h1>
        <button type="Logout" name="Logout" onClick={this.onLogout.bind(this)}>Logout</button>
        <LinksList/>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" ref="url" placeholder="URL"></input>
        <button>Add Link</button>
        </form>
      </div>
    );
  }
};