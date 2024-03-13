import React, { Component } from 'react'

export default class State3 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         user:this.props.user,
      }
    }

    changeHandeler(){
        this.setState({
            user:"New User Sujeet"
        })
    }

  render() {
    console.log(this.state.user)
    console.log(this.props.user)
    return (
      <div>
        <h2>{this.state.user}</h2>
        <button onClick={() => {this.changeHandeler()}}>Click Here</button>
      </div>
    )
  }
}
