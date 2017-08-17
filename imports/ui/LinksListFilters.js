import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';


export default class LinksListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showVisible: false
        } 
    }

    componentDidMount() {
        console.log('Component did mount LinksListFilters');
        this.linksTracker = Tracker.autorun(() => {
            this.setState({ showVisible: Session.get('showVisible') });
            console.log('showVisible: ', this.state.showVisible);
        });
    }

    componentWillUnmount() {
        console.log('Component will unmount LinksListFilters');
        this.linksTracker.stop();
    }
    
    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" checked={!this.state.showVisible} onChange={(e)=> {
                        // console.log(e.target.checked);
                        Session.set('showVisible', !e.target.checked);
                    }}/>
                    Show hidden links
                </label>
            </div>
        )
    }
}
