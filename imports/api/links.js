import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links', function() {
        // console.log('userid ', this.userId);
        return Links.find({userId: this.userId});
        // return Links.find({});
    });
}

// SECURE way to interact with mongo
Meteor.methods ({
    'links.insert'(url) {
        if (!this.userId) {
            throw new Meteor.Error('Not-authorised!');
        }

        new SimpleSchema({
            url: {
                type: String,
                label: 'Your link is badness!',
                regEx: SimpleSchema.RegEx.Url
            }
        }).validate({url});

        Links.insert({
            _id: shortid.generate(),
            url,
            userId: this.userId
        });
    }
});
