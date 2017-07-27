// Named imports
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory } from 'react-router';

// Imports
import Login from './../ui/Login';
import Signup from './../ui/Signup';
import Link from './../ui/Link';
import NotFound from './../ui/NotFound';
import React from 'react';

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

export const onAuthChange = (isAuthenticated) => {
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
};

export const routes = (
  <Router history={browserHistory}>
    <route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
    <route path="*" component={NotFound}/>
  </Router>
);

