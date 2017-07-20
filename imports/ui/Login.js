import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login to short link</h1>
        Login from here

        <Link to="/signup">Have an account?</Link>
      </div>
    );
  }
};