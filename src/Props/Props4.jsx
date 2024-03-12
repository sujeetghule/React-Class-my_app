import React, { Component } from 'react'

export default class Props4 extends Component {
  render() {
    let {name,age} = this.props
    return (
      <h2>Hello From {name} and {age}</h2>
    )
  }
}
