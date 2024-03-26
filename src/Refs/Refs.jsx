import React, { Component } from 'react';

class Refs extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        // Focus on the input element when the component mounts
        this.inputRef.current.focus();
    }

    clickHandler = () => {
        // Access the value of the input element and display it in an alert
        alert(`${this.inputRef.current.value}`);
    };

    render() {
        return (
            <>
                <input type="text" name="" className="inp1" ref={this.inputRef} id=""/>
                <button onClick={this.clickHandler}>Click me</button>
            </>
        );
    }
}

export default Refs;
