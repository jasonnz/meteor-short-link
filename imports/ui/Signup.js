import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  submitForm(e) {
    e.preventDefault();
    
    // require('meteor/meteor').Meteor.userId();
    // require('meteor/meteor').Meteor.user().emails[0];
    // require('meteor/accounts-base');
    // require('meteor/accounts-base').Accounts.logout();
    // get the ref from the html element
    let email = this.refs.email.value.trim();
    let password = this.refs.email.value.trim();

    Accounts.createUser({email, password}, (err) => {
      // console.log('Signup callback ', err);
      if (err) {
        this.setState({error: err.reason})
      } else {
        this.setState({error: ''})
      }
    });


    // this.setState({
    //   error: 'Sonmething went wrong'
    // });
  }

  render() {
     return (
      <div>
        <h1>Join short link?</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.submitForm.bind(this)}>
          <p><input type="email" ref="email" name="email" placeholder="Email"/></p>
          <p><input type="password" ref="password" name="password" placeholder="Password"/></p>
          <button>Create an account</button>
        </form>
        
        <Link to="/">Already have an account?</Link>
      </div>
    );
  }

};