import { Meteor } from 'meteor/meteor';
import './../imports/api/users'

Meteor.startup(() => {

  // code to run on server at startup
  // const employeeSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //     optional: false
  //   },
  //   hourlyWage: {
  //     type: Number,
  //     min: 0
  //   },
  //   email: {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }

  // });

  // employeeSchema.validate({
  //   name: 'Jason',
  //   hourlyWage: 60,
  //   email: 'test@test.com'
  // });

});
