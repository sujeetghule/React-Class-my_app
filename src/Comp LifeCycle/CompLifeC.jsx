import React, { Component } from 'react'
import CompLifeD from './CompLifeD';

export class CompLifeC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count : 0
         
      }
      console.log(" C:  Comp Constructor()");
    }
    
    static getDerivedStateFromProps(props , state){

        console.log(" C: Comp A getDrivedStateFromProp()")
        return null;
    }

    componentDidMount(){
        console.log(" C :Comp Comp did Mount");
    }

    incrementCount = ()=>{
        this.setState({
            count:this.state.count+1
        })
        console.log("Increment Count ")
        console.log(this.state.count)
    }
  render() {
    console.log("Comp C Render()")
    return (
      <>
        <p>CompLife C</p>
        <CompLifeD/>
        
      </>
      
    )
  }
}

export default CompLifeC