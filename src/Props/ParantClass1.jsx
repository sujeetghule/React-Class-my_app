import React, { Component } from 'react'
import ChildClass from './ChildClass'

export default class ParantClass1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent :"Tera Bap ko bula"
      }
      this.greetmessage= this.greetmessage.bind(this)
    }
    greetmessage(){
        alert(`hello ${this.state.parent}`)
    }
  render() {
    return (
      <div>
        <ChildClass greetHandler = {this.greetmessage}/>
      </div>
    )
  }
}
