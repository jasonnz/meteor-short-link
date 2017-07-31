// Named imports
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { onAuthChange, routes} from '../imports/routes/routes';
import { Links } from '../imports/api/links';  

// Imports
import ReactDOM from 'react-dom';

// get current location
// window.browserHistory = browserHistory;
Tracker.autorun(() => {
  // Flippoing a boolean to give a bool value
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});


Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});