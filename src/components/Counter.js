// STATEFUL Functional Component: using states with useState()

// Importing useState()
import React, {useState} from 'react';

import '../styles/Counter.css';

function Counter() {
    /*
     * useState:
     * - accepts the initial value of the state
     * - returns the current value of the state and a method to set the state
     */
    const [counter, setCounter] = useState(0);

    /*
     * When setCounter() is called, the state of counter will change from the current value to the value inside the parentheses
     */
    return(
        <div className="counterStyle">
            <p>Counter has been clicked {counter} times</p>
            <button onClick={() => setCounter(counter + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;