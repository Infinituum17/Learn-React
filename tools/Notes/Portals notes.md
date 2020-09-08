# Portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

To create a Portal we can use ReactDOM:
<code>render() {return ReactDOM.createPortal(this.props.children, domNode)}</code>
Now <code>this.props.children</code> will be rendered in <code>domNode</code>

>link: https://reactjs.org/docs/portals.html