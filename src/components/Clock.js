import React from 'react';

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