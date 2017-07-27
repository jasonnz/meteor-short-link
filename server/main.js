import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup

  Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;
    try {
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({email});
    } catch(e) {
      console.log('CATCH', user);
      throw new Meteor.Error(400, e.message);
    }

    return true
  });

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
