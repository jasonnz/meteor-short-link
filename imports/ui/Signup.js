import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  submitForm(e) {
    e.preventDefault();
  
    this.setState({
      error: 'Sonmething went wrong'
    })
  }

  render() {
     return (
      <div>
        <h1>Join short link?</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.submitForm.bind(this)}>
          <p><input type="email" name="email" placeholder="Email"/></p>
          <p><input type="password" name="password" placeholder="Password"/></p>
          <button>Create an account</button>
        </form>
        
        <Link to="/">Already have an account?</Link>
      </div>
    );
  }

};