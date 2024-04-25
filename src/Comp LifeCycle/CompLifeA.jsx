import React, { Component } from 'react'

export class CompLifeA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count : 0
         
      }
      console.log("Comp A Constructor()");
    }
    
    static getDerivedStateFromProps(props , state){

        console.log("Comp A getDrivedStateFromProp()")
        return null;
    }

    componentDidMount(){
        console.log("Comp Comp did Mount");
    }

    incrementCount = ()=>{
        this.setState({
            count:this.state.count+1
        })
        console.log("Increment Count ")
    }
  render() {
    console.log("Comp A Render()")
    return (
      <>
        <p>CompLife A</p>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}> Count</button>
      </>
      
    )
  }
}

export default CompLifeA