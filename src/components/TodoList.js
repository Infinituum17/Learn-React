// STATEFUL Class Component: change styles

import React from 'react';

import '../styles/TodoList.css';

class TodoList extends React.Component {
    constructor(props){
        super(props);

        /*
         * this.state gets initialized (stateful component)
         */
        this.state = {todos: this.props.todos}
    }

    render() {
        return(
            <ul className="todolist">
                {
                    /*
                     * Iterating over the todo list
                     * - using the map function React will create a list of JSX Components and will render them separately
                     */
                }
                {this.state.todos.map((v) => {
                    let currentIndex = this.state.todos.indexOf(v);
                    /*
                     * Building a list of Components (like lists) requires the use of keys (binded to the HTML which will represent the actual content on the page)
                     * - if you can't use any value as key, your last choice is to use the index provided by the map function
                     */
                    return (
                        <li key={currentIndex.toString()} className="todolist-item" style={{color: (v.done) ? 'grey' : 'white', textDecoration: (v.done) ? 'line-through' : 'none'}}>
                            <input className="checkboxes" 
                                type="checkbox" 
                                defaultChecked={v.done} 
                                onChange={this.checkboxClicked.bind(this, currentIndex)} />
                            {v.text}
                        </li>
                    );
                })}
            </ul>
        );
    }

    /*
     * checkboxClicked will fire everytime React detects a change in the current Component inside the HTML DOM (like when checking a box)
     * - To detect the change in the HTML DOM React uses the onChange property
     */
    checkboxClicked(i) {
        let currentState = this.state.todos;
        currentState[i].done = !this.state.todos[i].done;

        this.setState({
            todos: currentState,
        })
    }
}

export default TodoList;