import { WebApp } from 'meteor/webapp'
import { Meteor } from 'meteor/meteor';
import './../imports/api/users';
import {Links} from './../imports/api/links';
import { SimpleSchemaDV } from '../imports/startup/simple-schema-configuration';

Meteor.startup(() => {
    WebApp.connectHandlers.use((req, res, next) => {
        // console.log('This is from my custom middleware');
        // // console.log(req.url, ' ' , req.method + ' ', req.headers, ' ----Query---- ', req.query);
        // res.statusCode = 508;
        // res.setHeader('my-custom-header', 'Jason was here');
        // // res.write('<h1>This is my middleware at work</h1>');
        // res.end();
        next();
    });
});
