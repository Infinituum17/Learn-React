# HOC: High Order Components

High Order Components are useful when dealing with similar Components (Components that run similar code, but with little changes). An HOC wraps a Component code to make it anonymous and flexible: by doing so, it can be used by many Components in a slightly different way

For easy debugging, wrap the displayname:
<code>ChildComponent.displayName = ...</code>

Tips:
- Don't use HOCs in the render method
- Copy all the static methods
- Refs are not passed through

>link: https://reactjs.org/docs/higher-order-components.html