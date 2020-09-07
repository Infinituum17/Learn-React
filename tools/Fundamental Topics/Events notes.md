event.preventDefault() will need to be explicitly called

Valid syntax:
<code>`<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>`</code><br/>
<code>`<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>`</code><br/>

>link: https://reactjs.org/docs/handling-events.html