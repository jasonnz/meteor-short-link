import { Meteor } from 'meteor/meteor';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import React from 'react';
import ReactDOM from 'react-dom';

Meteor.startup(() => {
  ReactDOM.render(<Link/>, document.getElementById('app'));
});