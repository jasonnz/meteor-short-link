import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Links } from '../api/links';
import Modal from 'react-modal';

// vistiedCount
// lastVisitedAt start with null
// db.links.updateMany({},{$set : {"vistiedCount": 0,"lastVisitedAt": null}});

export default class AddLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            isOpen: false,
            error: ''
        }
    }


    onSubmit(e) {
        // const url = this.refs.url.value.trim();
        e.preventDefault();
        // destructoring
        const { url } = this.state;    
        Meteor.call('links.insert', url, (err, res)=> {
            if (!err) {
                this.handleModalClose();
            } else {
                this.setState({
                    error: err.reason
                });
            }
        });
    }

    onChange(e) {
        this.setState({
            url: e.target.value.trim()
        });
    }

    handleModalClose() {
        this.setState({
            isOpen:false,  url: '', 
            error: ''}
        );
    }

    render() { 
        return (
            <div>
                <button className="button" onClick={ ()=> this.setState({isOpen:true}) }>+ Add Link </button>
                <Modal 
                    isOpen={this.state.isOpen} 
                    contentLabel={"Add Link"}
                    onAfterOpen={()=> this.refs.url.focus()}
                    onRequestClose={this.handleModalClose.bind(this)}
                    className="boxed-view__box"
                    overlayClassName="boxed-view boxed-view--model">

                    <h1>Add Link</h1>
                    {this.state.error ? <p>{this.state.error}</p> : undefined}
                    <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
                    <input 
                        type="text" 
                        ref="url" 
                        placeholder="URL" 
                        value={this.state.url}
                        onChange={this.onChange.bind(this)}
                    />
                    <button className="button">Add Link</button>
                    <button type="button" className="button button--secondary" onClick={this.handleModalClose.bind(this)}>Close Modal</button>
                    </form>
                </Modal>
            </div>
        );
    }
}