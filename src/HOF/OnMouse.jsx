import React, { Component } from 'react'
import UpdateComponent from './HigherOrderComp'

export class OnMouse extends Component {
  render() {
    const {name,count1,incrementCount1}=this.props
    return (
      <div>
        <button onMouseOver={incrementCount1}>{name} {count1}</button>
      </div>
    )
  }
}
export default UpdateComponent(OnMouse)