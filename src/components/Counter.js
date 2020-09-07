// STATEFUL Functional Component: using states and effects with useState() and useEffect()

// Importing useState() and useEffect()
import React, {useState, useEffect} from 'react';

import '../styles/Counter.css';

function Counter() {
    /*
     * useState:
     * - accepts the initial value of the state
     * - returns the current value of the state and a method to set the state
     */
    const [counter, setCounter] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.getElementById("useEffect").innerText = `Counter has been clicked ${counter} times`;

        //Returning a function from here will cause it to be called replacing the method componentWillUnmount()
    });

    // When setCounter() is called, the state of counter will change from the current value to the value inside the parentheses
    return(
        <div className="counterStyle">
            <p id="useEffect"></p>
            <button onClick={() => setCounter(counter + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;