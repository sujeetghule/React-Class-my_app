import React, { Component } from 'react'

export default class UseEffect6 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0,
      }


    }

    logPosition= (e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY,
        })
    }

    componentDidMount(){
        window.addEventListener("mouseover",this.logPosition)
    }
  render() {
    return (
      <div><p>UseEffect6</p>
      <h1>X:{this.state.x}</h1>
      <h1>Y:{this.state.y}</h1>

      
      </div>
    )
  }
}
