# Error Boundaries

Error Boundaries are a type of Component, which job is to look and catch for any errors in the child tree made of Components.

Any Component can become an Error Boundary by just implementing these 2 methods:
- <code>static getDerivedStateFromError(error)</code>: To render a fallback UI when the error is thrown
- <code>componentDidCatch(error, errorInfo)</code>: To log the error