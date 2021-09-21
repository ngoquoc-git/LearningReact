import React, { Component } from 'react';

class Planer extends Component{
  /**
   * @constructor
   */
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  /**
   * Update new item to the state
   * @param {string} key type of the item, "newItem" for now 
   * @param {string} value name of the item 
   */
  updateInput(key, value){
    //update to react state
    this.setState({
      [key]: value
    });
  }

  /**
   * Give the item an id and update to the list
   */
  addItem(){
    //Create an item with a random id number
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];
    list.push(newItem);

    //update state with a new list and reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }

  /**
   * Delete an item from the list if any
   * @param {int} id the item that will be deleted 
   */
  deleteItem(id){
    const list = [...this.state.list];

    //filted out the list without the deleted item
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render(){
    return(
      <div className="App">
        <div>
          Add an Item...
          <br/>
          <input
            placeholder="Enter item here..."
            type="text"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>
            Add
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Planer;
