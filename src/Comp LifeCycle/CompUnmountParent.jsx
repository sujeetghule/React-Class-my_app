import React, { Component } from 'react'
import CompUnlount from './CompUnlount'

export class CompUnmountParent extends Component {
  constructor(props) {
    super(props)
    this.state = {
       toggele :true
    }
  }
  componentWillUnmount(){
    alert("componet will unmounted")

    console.log("componet will unmounted")
}

  togging1=()=>{
    this.setState(
      {
        toggele:true
      }
    )
  }
  togging2=()=>{
    this.setState(
      {
        toggele:false
      }
    )
  }

  

  render() {
    return (
      <div>
        
        {
          this.state.toggele?<CompUnlount></CompUnlount>:null
        }

        <button onClick={this.togging1}> Mount</button>
        <button onClick={this.togging2}> Unmount</button>


      </div>
    )
  }
}

export default CompUnmountParent