# Refs

Refs are objects that can be used to get the reference of a specific Component in the Component tree.

## Forwarding Refs

Using <code>const ref = React.createRef()</code> we can create a <code>Ref object</code> in the Parent Component.
Then we can pass it to the child Component by simply adding a tag <code>ref</code> when rendering it: `<ChildComponent ref={ref} />`
NOTE: Now the child Component can receive the <code>Ref object</code> and to fully achieve this, we can call the method <code>React.forwardRef(childComponent)</code>, where <code>childComponent</code> is (in this case) an anonymous function that accepts 2 paramethers: <code>props</code> and <code>ref</code> and still returns the JSX which represent our child Component.

So now the Parent Component should contain something like this:<br />
<code>class ParentC{
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    render() {
        `<ChildComponent ref={this.inputRef}>`
    }
}</code>

And the Child Component something like this:
<code>const ChildComponent = React.forwardRef((props, ref) => {
    return(`<div><input ref={ref} type="text"></div>`);
});</code>

Now in the parent class we can use <code>this.inputRef</code> to refer to the input tag inside its Component tree