import React, { Component } from 'react';
import AddItem from '../AddItem/AddItem';
import Items from '../Items/Items';
import './ItemController.css';

class ItemController extends Component {
    state = {
        allItems: [],
        inputText: ""
      }
    
    addItemHandler = () => {
        let allItems, newItem, ID;
        allItems = this.state.allItems;

        if (allItems.length>0) {
            ID = allItems[allItems.length-1].id + 1;
        } else {
            ID = 0;
        }

        newItem = {
            id: ID,
            name: this.state.inputText
        }

        allItems.push(newItem);
        console.log(newItem);

        this.setState({ allItems: allItems});

        this.clearInput();
    }

    deleteItemHandler = (ID) => {
        let allItems, delItemIndex;

        allItems = this.state.allItems;

        //Finds index of item with id of ID
        delItemIndex = allItems.map((index) => {
            return index.id;
        }).indexOf(ID);

        allItems.splice(delItemIndex, 1);

        this.setState({ allItems: allItems })
    }

    clearInput = () => {
            this.setState({ inputText: "" });
    }

    handleInputChange = (event) => {
        this.setState({ inputText: event.target.value });
    }

    render () {
        const itemList = this.state.allItems.map((item, index) => {
            return <Items 
            name={item.name}
            key={item.id}
            onClick={() => this.deleteItemHandler(item.id)}
            />
        })

        return (
            <div>
                <input
                id="input"
                type="text"
                onChange={this.handleInputChange}
                value={this.state.inputText}
                placeholder="Enter Item"
                autoFocus/>
                <AddItem onClick={this.addItemHandler}/>
                {itemList}
            </div>
        );
    }
    
}

export default ItemController;