import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links'
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: []
        } 
    }

    componentDidMount() {
        console.log('Component did mount links list');
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find().fetch();
            this.setState({ links });
            console.log('New links ', links);
        });
    }

    componentWillUnmount() {
        console.log('Component will unmount links list');
        this.linksTracker.stop();
    }

    renderLinksListItems() {
        return this.state.links.map((link)=> {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
        });
        // return this.state.links.map((link)=> {
        //     return <p key={link._id}>{link.url}</p>
        // });
    }

    render() {
        return (
            <div>
                <p>Links List</p>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    }
}