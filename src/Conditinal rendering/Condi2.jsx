import React, { Component } from 'react'
import Login from './Login'
import Reg from './Reg'

export default class Condi2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLogIn:true
      }
    }
  render() {
    let message;
    if (this.state.isLogIn) {
        message = <Login/>
    } else {
        message = <Reg/>
    }
    return (
    
    <div>
        {message}
    
    </div>
    )
  }
}
