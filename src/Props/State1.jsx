import React, { Component } from 'react'

export default class State1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welcome to JSX"
      }
    }
    
  render() {
    return (
      <div>
       <h1> {this.state.message}</h1>
      </div>
    )
  }
}
