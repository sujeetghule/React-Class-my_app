import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log("*****Regular Comp*****")

    return (
      <div>
                <h1>Regular Comp {this.props.name1}</h1>

      </div>
    )
  }
}

export default RegularComp