import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h2>Hello from {this.props.obj.name} and my Age is {this.props.obj.age}</h2>
      </div>
    )
  }
}
