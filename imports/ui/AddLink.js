import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Links } from '../api/links';

// vistiedCount
// lastVisitedAt start with null
// db.links.updateMany({},{$set : {"vistiedCount": 0,"lastVisitedAt": null}});

export default class AddLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
    }


    onSubmit(e) {
        // const url = this.refs.url.value.trim();
        e.preventDefault();
        // destructoring
        const { url } = this.state;

        if (url) {
            // Links.insert({ url, userId: Meteor.userId() }); INSECURE
            Meteor.call('links.insert', url, (err, res)=> {
                if (!err) {
                    this.setState({
                        url: ''
                    });
                }
            });
            
        }
    }

    onChange(e) {
        this.setState({
            url: e.target.value.trim()
        });
    }

    render() { 
        return (
            <div>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                <input 
                    type="text" 
                    ref="url" 
                    placeholder="URL" 
                    value={this.state.url}
                    onChange={this.onChange.bind(this)}
                />
                <button>Add Link</button>
                </form>
            </div>
        );
    }
}