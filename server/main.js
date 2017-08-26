import { WebApp } from 'meteor/webapp'
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import './../imports/api/users';
import {Links} from './../imports/api/links';
import { SimpleSchemaDV } from '../imports/startup/simple-schema-configuration';

Meteor.startup(() => {

    let momentNow = moment();
    console.log(momentNow.format('MMM'));

    WebApp.connectHandlers.use((req, res, next) => {
        const _id = req.url.slice(1);
        const link = Links.findOne({ _id });
        
        if (link) {
            console.log(link);
            res.statusCode = 302;
            res.setHeader('Location', link.url);
            res.end();
            Meteor.call('links.trackVisit', _id);
        } else {
            next();
        }

    });
});
