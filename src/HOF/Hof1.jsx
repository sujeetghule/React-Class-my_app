import React, { Component } from 'react'

export default class Hof1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    incrementCount=()=>{
        this.setState((prevState)=>{
            return {count:prevState.count+1}
        })
    }   
  render() {
    return (
      <div onClick={this.incrementCount}>Click Here To increment: {this.state.count}</div>
    )
  }
}
