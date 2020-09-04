# Conditional Rendering of a Component

### Components can be rendered conditionally using:
- ifs
- '&&' operator
- Conditional (ternary) operator

Returning null from a Functional Component or a Class Component will cause the Component to not render on the page without modifying the lifecyle of other Components (componentDidUpdate will still be called)

>link: https://it.reactjs.org/docs/conditional-rendering.html