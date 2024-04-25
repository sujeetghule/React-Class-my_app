import React, { Component } from 'react'

export class CompLifeD extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count : 0
         
      }
      console.log("Comp D Constructor()");
    }
    
    static getDerivedStateFromProps(props , state){

        console.log("Comp D getDrivedStateFromProp()")
        return null;
    }

    componentDidMount(){
        console.log(" D :Comp Comp did Mount");
    }

    incrementCount = ()=>{
        this.setState({
            count:this.state.count+1
        })
        console.log("Increment Count ")
        console.log(this.state.count)

    }
  render() {
    console.log("Comp D Render()")
    return (
      <>
        <p>CompLife D</p>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}> Count {this.state.count}</button>
      </>
      
    )
  }
}

export default CompLifeD