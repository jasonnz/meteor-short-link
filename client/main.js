// Named imports
import { Meteor } from 'meteor/meteor';
import { onAuthChange, routes} from '../imports/routes/routes'; 
import { Tracker } from 'meteor/tracker';

// Imports
import ReactDOM from 'react-dom';

Tracker.autorun(() => {
  // Flipping a boolean to give a bool value
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});