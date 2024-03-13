import React, { Component } from 'react'

export default class State2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:"Subscribe Here ..."
      }
    }
    changeHandeler(){
        this.setState({
            message:"Your subscription will added sucessfully"
        })
    }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => {this.changeHandeler()}}>Click Here</button>
      </div>
    )
  }
}
