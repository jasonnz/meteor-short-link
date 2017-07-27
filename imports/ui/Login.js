import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor'

export default class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  
  submitForm(e) {
    e.preventDefault();
  
    let email = this.refs.email.value.trim();
    let password = this.refs.email.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      console.log('Login callback', err);
      if (err) {
        this.setState({error: 'Unable to login, plase check email or password!'});
      } else {
        this.setState({error: ''})
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Short link</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.submitForm.bind(this)} noValidate>
          <p><input type="email" ref="email" name="email" placeholder="Email"/></p>
          <p><input type="password" ref="password" name="password" placeholder="Password"/></p>
          <button>Login</button>
        </form>

        <Link to="/signup">Have an account?</Link>
      </div>
    );
  }
};