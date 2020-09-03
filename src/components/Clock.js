import React from 'react';


// Class Component STATEFUL
class Clock extends React.Component {
    constructor(props){
        super(props);

        /*
         * this.state reloads the Component everytime one of his values changes
         */
        this.state = {date: new Date()};
    }

    /*
     * This method is called everytime the Component is loaded into the DOM
     */
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    /*
     * This method is called everytime the Component is unloaded from the DOM
     */
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        /*
         * this.setState({obj}): Sets variables contained in this.state
         * this.setState((state, props) => ({obj})): Async method of setting variables in this.state:
         * - It's commonly used if two async algorithms share this.state.variable
         */
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default Clock;