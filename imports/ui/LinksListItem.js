import React from 'react';


export default class LinksListItem extends React.Component {

    constructor(props) {
        super(props);
        // console.log('PROPS ', props);
        this.state = {
            links: []
        } 
        // console.log('links ', this.props.shortUrl);
    }

    render() {
        return (
            <div>
                <p key={this.props._id}>{this.props.url} {this.props.shortUrl} </p>
            </div>
        );
     }

}

LinksListItem.proptypes = {
    shortUrl: React.PropTypes.string.isRequired,
    _id: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string.isRequired
}