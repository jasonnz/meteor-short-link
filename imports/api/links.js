import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links', function() {
        // console.log('userid ', this.userId);
        return Links.find({userId: this.userId});
        // return Links.find({});
    });
}

Meteor.methods ({
    greetUser(name) {
        if (!name) throw new Meteor.Error('invalid-argument', 'Name is required');
        console.log('Great user is running');
        return `Hello ${name}`;
    },
    addNumber(n1, n2) {
        if (typeof n1 !== 'number' && typeof n2 !== 'number') throw new Meteor.Error('invalid-argument', 'Number is required');
        return n1 + n2;
    }
});
