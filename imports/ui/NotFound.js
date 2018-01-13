import React from 'react';
import { Link } from 'react-router';

const NotFound = (props) => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <div>
                    <h1>Page not found!</h1>
                    <p>Component is not found yo! </p>
                    <Link to="/links" className="button button--link">HEAD HOME</Link>
                </div>
            </div>
        </div>    
    ); 
};

export default NotFound;