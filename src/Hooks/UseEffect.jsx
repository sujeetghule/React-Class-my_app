import React, { Component } from 'react'

export default class UseEffect extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
    componentDidCatch(){
        console.log("Component Did Mount")
        document.title = this.state.count
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Component Update")
        document.title = this.state.count

    }

  render() {
    return (
      <div><p>UseEffect</p>
      <h1>{this.state.count}</h1>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>Add</button>

      </div>
    )
  }
}
