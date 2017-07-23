// Named imports
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

// Imports
import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import React from 'react';
import ReactDOM from 'react-dom';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const routes = (
  <Router history={browserHistory}>
    <route path="/" component={Login}/>
    <route path="/signup" component={Signup}/>
    <route path="/links" component={Link}/>
    <route path="*" component={NotFound}/>
  </Router>
);

// get current location
window.browserHistory = browserHistory;
Tracker.autorun(() => {
  // Flippoing a boolean to give a bool value
  const isAuthenticated = !!Meteor.userId();
  const pathName = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName.toLowerCase());
  const isAuthenticatedPage = authenticatedPages.includes(pathName.toLowerCase());

  console.log(isUnauthenticatedPage + " " + isUnauthenticatedPage + " " + isAuthenticated);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push('/links');
  } else
  if (isAuthenticatedPage && !isAuthenticated) {
     browserHistory.push('/');
  }

});


Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});