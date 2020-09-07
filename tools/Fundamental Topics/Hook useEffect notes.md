# useEffect

The useEffect is a method used instead of componentDidMount(), componentDidUpdate() and componentWillUnmount() when using Hooks (all in one!).
The first parameter will be a function that will be called once when the Component is ready (componentDidMount()) and everytime the Component is updated (componentDidUpdate()). Returning another function from the first one will cause the returned function to be called when the Component is ready to be unmounted (componentWillUnmount()).

>link: https://reactjs.org/docs/hooks-effect.html