// Named imports
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { onAuthChange, routes} from '../imports/routes/routes'; 
import { Tracker } from 'meteor/tracker';
import SimpleSchemaDV  from '../imports/startup/simple-schema-configuration';

// Imports
import ReactDOM from 'react-dom';

Tracker.autorun(() => {
  // Flipping a boolean to give a bool value
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById('app'));
});