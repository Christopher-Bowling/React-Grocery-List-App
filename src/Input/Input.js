import React from 'react';
import './Input.css';

const input = (props) => {

    return (
        <div>
            <input
            id="input"
            type="text"
            value={props.userInput}
            onChange={props.onChange}
            placeholder="Enter Item"
            autoFocus/>
        </div>
    );
};

export default input;

// Switch input after completing