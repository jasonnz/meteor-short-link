import React from 'react';
import { Session } from 'meteor/session';
// use a stateless functional component

export default () => {
    return (
        <div>
            <label>
                <input type="checkbox" onChange={(e)=> {
                    // console.log(e.target.checked);
                    Session.set('showVisible', !e.target.checked);
                }}/>
                Show hidden links
            </label>
        </div>
    )
}