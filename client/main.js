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

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    console.log('onEnterPublicPage');
    // browserHistory.push('/links');
    browserHistory.replace('/links');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    console.log('onEnterPrivatePage');
    browserHistory.replace('/');
  }
};

const routes = (
  <Router history={browserHistory}>
    <route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
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
    browserHistory.replace('/links');
  } else
  if (isAuthenticatedPage && !isAuthenticated) {
     browserHistory.replace('/');
  }

});


Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});