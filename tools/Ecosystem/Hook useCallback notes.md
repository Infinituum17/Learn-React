# useCallback

The <code>useCallback</code> method prevents unnecessary renders when dealing with big data. It's useful to return a big set of data without re-generating the function's result everytime the Component reloads. As a secondary parameter, it accepts a list of dependencies (variables) which keep track of their value to eventually change the returned data.
Using this method is like caching a result until some data changes and the result needs to be calculated again.

>link: https://reactjs.org/docs/hooks-reference.html#usecallback