import React, { Component } from 'react';

export class CompLifeF extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    console.log("constructor get invoked");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Comp F getDrivedStateFromProp()");
    return null;
  }

  componentDidMount() {
    console.log("Comp did mount");
  }

  shouldComponentUpdate() {
    console.log("Should Comp Update");
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Snap Update");
    return null;
  }

  componentDidUpdate() {
    console.log("Comp DID UPDATE");
    return null;
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
    console.log("Increment by one ");
  };

  render() {
    console.log("F Render");
    return (
      <div>
        <p>Comp A</p>
        <button onClick={this.increment}>{this.state.count}</button>
      </div>
    );
  }
}

export default CompLifeF;
