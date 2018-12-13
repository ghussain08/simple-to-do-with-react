import React, { Component } from 'react';
import './TodoItem.css';
class TodoItem extends Component {


    onDeleteHandler = (e) => {
        let parentNodeClassList = e.target.parentNode.classList;
        (parentNodeClassList.contains('remove')) ? parentNodeClassList.remove('remove') :
            parentNodeClassList.add('remove');
    }

    render() {
        // lis is the list of todo item
        let lis;
        if (this.props.items.length) {
            /*if list is not empty then iterate over props.item array
            and create a group of li
    
            example
    
            <li>
                <p>Todo Item</p>
                <div>x</div>
            </li>    
            */
            lis = this.props.items.map((item, index) => {
                return <li key={index} >
                    <p>{item}</p>
                    <div onClick={this.onDeleteHandler} className="delete" >X</div>
                </li>
            });
        }
        else {
            /* if there is no items in todo list then li='' */
            lis = <li>Add Something to the list</li>;
        }
        return (
            <ul className='TodoListItems' >
                {lis}
            </ul >
        )
    }
}
export default TodoItem;