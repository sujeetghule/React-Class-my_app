import React from 'react'
import { PureComponent } from 'react'

export class Pure extends PureComponent {

  render() {
    console.log("*****Pure Comp*****")

    return (
      <div>
        <h1>Pure Comp {this.props.name1}</h1>
      </div>
    )
  }
}

export default Pure