import React, { Component } from 'react'
import Pure from './Pure'
import RegularComp from './RegularComp'

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"sujeet"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"sujeet"

            })
        },3000)
    }


    

  render() {
    console.log("*****Parent Comp*****")
    return (
      <div>
        <Pure name = {this.props.name}/>
        <RegularComp name = {this.props.name}/>
        <h1>Parent Comp{this.props.name}</h1>
      </div>
    )
  }
}

export default Parent