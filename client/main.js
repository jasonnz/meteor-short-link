// Named imports
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory } from 'react-router';

// Imports
import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import React from 'react';
import ReactDOM from 'react-dom';

const routes = (
  <Router history={browserHistory}>
    <route path="/" component={Login}/>
    <route path="/signup" component={Signup}/>
    <route path="/links" component={Link}/>
    <route path="*" component={NotFound}/>
  </Router>
);



Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});