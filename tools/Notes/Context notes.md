# Context

Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.
Context retrieves values from the Parent Component and distributes them to the children Components.

The new Context should be created in a separate file and imported into its <code>Providers</code> and <code>Consumers</code>:
Using <code>React.createContext()</code> we can create a context and store it in a variable:
- <code>export const ContextName = React.crateContext()</code>

In the Parent (or Provider) Component we would write something like:
<code>return (<ContextName.Provider value={{key: value}}>);</code><br/>

In the Child (or Consumer) Component we would write something like:
- <code>import {ContextName} from 'context-folder/ContextFile'</code>
- <code><i>Component declaration</i></code>
- <code>ComponentClassName.contextType=ContextName</code>

Now we can access Context data by typing <code>this.context</code> inside the Child Component Class.


Using Hooks we can use Context also in Functional Components (see [useContext](../Notes/Hook%20useContext%20notes.md))