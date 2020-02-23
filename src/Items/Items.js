import React from 'react';
import './Items.css';

const items = (props) => {
    return (
        <div className="groceryItem">
            <h4>{props.name}</h4>
            <button onClick={props.onClick} style={{ 'color': 'red' }}>X</button>
        </div>
    );
}

export default items;