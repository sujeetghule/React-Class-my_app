import React, { Component } from 'react'

export class CompLifeE extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
    console.log("constructor get invoked");
  }
  static getDerivedStateFromProps(props, state) {

    console.log("Comp E getDrivedStateFromProp()")
    return null;
  }
  componentDidMount(){
    console.log("Comp did mount")
    
  }

  increment=()=>{
      this.setState({
        count: this.state.count+1
      })

      console.log("Increment by one ")
    
  }


  render() {
    return (
      <div>
        <p>Comp A</p>
        <button onClick={this.increment}>{this.state.count}</button>
      </div>
    )
  }
}

export default CompLifeE