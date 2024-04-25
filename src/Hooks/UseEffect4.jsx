import React, { Component } from 'react'

export default class UseEffect4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:""
      }
    }
    componentDidMount(){
        document.title = `You clicked ${this.state.count}`
        console.log("Componant Did Mount()")
    }

    componentDidUpdate(preProps,preState){
        if(preState.count!==this.state.count){
            document.title = `You clicked ${this.state.count}`
            console.log("Componant Did Update()")
        }
    }
  render() {
    return (
      <div><p>UseEffect4</p>
      <input type="text"  value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
      <h1>{this.state.count}</h1>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>Add</button>
      </div>
    )
  }
}
