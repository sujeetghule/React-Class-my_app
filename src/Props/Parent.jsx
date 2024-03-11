import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <Child obj={{name:"Sujeet",age:23}}></Child>
      </div>
    )
  }
}
