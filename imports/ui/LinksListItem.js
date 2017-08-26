import React from 'react';
import Clipboard from 'clipboard';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';

export default class LinksListItem extends React.Component {
    // document.querySelector('input').select();
    // document.execCommand('copy')

    componentDidMount() {
        this.clipboard = new Clipboard(this.refs.copy);

        this.clipboard.on('success', ()=> {
           this.setState({justCopied: true});
           setTimeout(()=> this.setState({justCopied: false}), 1000);
        }).on('error', () => {
            console.log('A no go!');
        });      
    }
    
    componentWillUnmount() {
        this.clipboard.destroy();
    }

    constructor(props) {
        super(props);
        this.state = {
            justCopied: false,
        } 
    }

    renderStats() {
        const visitMessage = this.props.visitedCount === 1 ? 'Visit' : 'Visits';
        let visitedMessage = null;

        if ( typeof this.props.lastVisitedAt === 'number') {
            let momentNow = moment(this.props.lastVisitedAt).fromNow();
            visitedMessage = `(visited ${ momentNow })`;
        }

        return <p>{this.props.visitedCount} {visitMessage} - {visitedMessage}</p>
    }

    render() {
        return (
            <div>
                <p key={this.props._id}>{this.props.url} </p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                {this.renderStats()}
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>
                    {this.state.justCopied ? 'Copied' : 'Copy'}
                </button>
                <button onClick= {() => {
                    Meteor.call('links.setVisibility', this.props._id, !this.props.visible);
                }}>
                    {this.props.visible ? 'Hide' : 'Unhide'}
                </button>
            </div>
        );
     }

}

LinksListItem.proptypes = {
    shortUrl: React.PropTypes.string.isRequired,
    _id: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string.isRequired,
    visible: React.PropTypes.bool.isRequired,
    visitedCount: React.PropTypes.number.isRequired,
    lastVisitedAt: React.PropTypes.number
}