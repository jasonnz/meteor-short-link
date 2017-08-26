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
    'links.insert' (url) {
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
            userId: this.userId,
            visible: true,
            visitedCount: 0,
            lastVisitedAt: null 
        });
    },
    'links.setVisibility' (_id, visible) {
        if (!this.userId) {
            throw new Meteor.Error('Not-authorised!');
        }

        new SimpleSchema({
            _id: {
                type: String,
                label: 'Your _id is less than one',
                min: 8
            },
            visible: {
                type: Boolean,
                label: 'Not a boolean'
            }
        }).validate({_id, visible});

        Links.update(
            {
                _id, 
                "userId": this.userId
            }, 
            {
                $set: {
                    visible
                }
            }
        );
    },
    'links.trackVisit' (_id) {
        new SimpleSchema({
            _id: {
                type: String,
                label: 'Your _id is less than one',
                min: 8
            }
        }).validate({_id});

        Links.update(
            {
                _id
            }, 
            {
                $set: {
                    lastVisitedAt: new Date().getTime()
                },
                $inc: {
                    visitedCount: 1
                }
            }
        );
    }
});
