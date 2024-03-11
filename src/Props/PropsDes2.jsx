import React, { Component } from 'react'

export default class PropsDes2 extends Component {
  render() {

    const {name,surname}=this.props.obj;

    return (
      <div>
        
        <h2>
            Hiello My Name is {name} {surname}
        </h2>
      </div>
    )
  }
}
