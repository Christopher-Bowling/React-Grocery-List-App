import React from 'react';
import './AddItem.css';

const AddItem = (props) => {

    return (
        <div id="addItem" className="row btn" onClick={props.onClick}>
            <h4>Add Item</h4>
        </div>
    );
};

export default AddItem;