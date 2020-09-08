# Props

Access any property of the JSX tag: <code>props.propertyName</code><br/>
Access the nested content of a JSX tag: <code>props.children</code><br/>

Using the spread operator <code>...obj</code> we can pass all the props to another child Component:
<code>function ParentComponent(props) {
    return(`<ChildComponent {...props} />`);
}</code>

Another way to share functionality between Components is to pass in a function as a prop to let the Component decide what to render.

>link: https://reactjs.org/docs/render-props.html