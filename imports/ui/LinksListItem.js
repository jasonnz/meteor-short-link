import React from 'react';
import Clipboard from 'clipboard';
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

    render() {
        return (
            <div>
                <p key={this.props._id}>{this.props.url} </p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                <p>{this.props.visitedCount} - {this.props.lastVisitedAt}</p>
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