import React, { Component } from 'react'
import InputRef from './InputRef';

export class ParentRef extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      console.log(this.inputRef);
    }


componentDidMount(){
    console.log(this.inputRef);
}

onBlur= ()=>{
    this.inputRef.current.value=this.inputRef.current.value.toUpperCase();
}

clickHandeler = ()=>{
    alert(`My name is ${this.inputRef.current.value}`)
}


  render() 
  {
    return (
      <>
      <InputRef ref={this.inputRef} onBlurHandel = {this.onBlur}/>
      <button onClick={this.clickHandeler}>Get Input</button>
      </>
    )
  }
}

export default ParentRef