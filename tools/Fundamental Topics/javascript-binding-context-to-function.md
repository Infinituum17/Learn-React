# Bind Function

Using ES6 function will cause he 'this' keyword to be automatically bound to the actual Component.

Otherwise you'll need to bound it to the right Component using the bind function.

## Bind to Object (to use this.<> in another context)

Inside the constructor you can declare:
<code>this.method = this.method.bind(this);</code>

Now this.<> will be available inside the method

>link: https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Function/bind